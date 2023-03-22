'use client';
import StarIcons from '@/app/components/StarIcons';
import { useEffect, useState } from 'react';
import { Button, Popover } from '@nextui-org/react';
import pb, { getAuthorById } from '@/app/(lib)/pocketbase';
import LinkableComponent from '@/app/components/LinkableComponent';
import AddReviewView from '@/app/components/AddReviewView';
import CustomCard from '@/app/components/CustomCard';
import ProfessionalStarIcons from '@/app/components/ProfessionalStarIcons';

function Book({ params }) {
  const [records, setRecords] = useState({});
  const [author, setAuthor] = useState([]);
  const [avgRating, setAvgRating] = useState(null);
  const [reviews, setReviews] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchAuthor = async (id) => {
    let author;
    await Promise.resolve(getAuthorById(id)).then((value) => (author = value));
    return author;
  };

  useEffect(() => {
    const foo = async () => {
      const fetchedRecords = await pb.collection('books').getOne(params.bookid);
      setRecords(fetchedRecords);

      fetchAuthor(fetchedRecords.author).then((value) => setAuthor(value));
      const fetchedRatings = await pb.collection('ratings').getFullList(200, {
        filter: `book_id = "${params.bookid}"`,
      });

      setReviews(fetchedRatings);

      if (fetchedRatings.length > 0) {
        const sum = fetchedRatings.reduce(
          (acc, current) => acc + current.rating,
          0
        );
        const averageRating = sum / fetchedRatings.length;
        setAvgRating(averageRating);
      } else {
        setAvgRating(0);
      }
    };
    foo();

    if (pb.authStore.isValid) {
      if (pb.authStore.model.admin) {
        setIsAdmin(true);
      }
    }
  }, []); //[params.bookid, avgRating]

  return (
    <>
      <div id="gridContainer">
        <div className="item tall">
          <img
            src={
              records &&
              `http://127.0.0.1:8090/api/files/books/${records.id}/${records.image}`
            }
            alt="book cover"
          ></img>
        </div>
        <div className="item">
          <h1> {records && records.title}</h1>
          <LinkableComponent
            link={'/authorpage/' + records.author}
            component={<h3>by {author[0]}</h3>}
          ></LinkableComponent>
        </div>
        {/* <div className="item">
          {records && <StarIcons rating={avgRating}></StarIcons>} */}
        <div className="item itemRating">
          <p className="itemRatingText">Professional rating:</p>
          {records && (
            <ProfessionalStarIcons
              isAdmin={isAdmin}
              bookId={params.bookid}
              rating={records.rating}
            ></ProfessionalStarIcons>
          )}
          <p className="itemRatingText">User rating: </p>
          {records && <StarIcons rating={records.rating}></StarIcons>}
        </div>
        <div className="item">
          <Popover>
            <Popover.Trigger>
              <Button
                css={{ backgroundColor: '#22b573' }}
                color="success"
                width={10}
                auto
                disabled={!pb.authStore.isValid}
              >
                Add a rating
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <AddReviewView bookid={params.bookid} />
            </Popover.Content>
          </Popover>
        </div>
        <div className="item" style={{ maxWidth: 550 }}>
          <p>{records && records.description}</p>
        </div>
        <div className="item">
          <p className="book-text">Genre: {records && records.genre}</p>
          <p>First published: {records.releaseyear}</p>
          <p></p>
        </div>
        <div style={{ position: 'absolute', right: 100, top: 200 }}>
          <CustomCard reviews={reviews}></CustomCard>
        </div>
      </div>
    </>
  );
}

export default Book;
