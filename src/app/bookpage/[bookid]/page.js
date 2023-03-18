'use client';
import StarIcons from '@/app/components/StarIcons';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import pb, { getAuthorById } from '@/app/(lib)/pocketbase';
import LinkableComponent from '@/app/components/LinkableComponent';

function Book({ params }) {
  const [records, setRecords] = useState({});
  const [author, setAuthor] = useState([]);

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
    };
    foo();
  }, []);

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
        <div className="item">
          {records && <StarIcons rating={records.rating}></StarIcons>}
        </div>
        <div className="item">
          <Button
            css={{ backgroundColor: '#22b573' }}
            width={10}
            auto
            disabled={!pb.authStore.isValid}
          >
            Add a rating
          </Button>
        </div>
        <div className="item">
          <p>{records && records.description}</p>
        </div>
        <div className="item">
          <p className="book-text">Genre: {records && records.genre}</p>
          <p>First published: {records.releaseyear}</p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Book;
