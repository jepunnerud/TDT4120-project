'use client';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import Slideshow from './Slideshow';
import StarIcons from '@/app/components/StarIcons';

import img from './download.jpeg';

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);

function Author({ params }) {
  const [authorBooks, setAuthorBooks] = useState([]);
  const [records, setRecords] = useState({});

  const fetchBooks = async (books) => {
    const records = await Promise.all(
      books.map(async (id) => {
        const record = await pb.collection('books').getOne(id);
        return record;
      })
    );
    console.log(records);
    return records;
  };

  useEffect(() => {
    const foo = async () => {
      const fetchedRecord = await pb
        .collection('authors')
        .getOne(params.authorid);

      console.log(fetchedRecord);
      setRecords(fetchedRecord);
      fetchBooks(fetchedRecord.books).then((e) => setAuthorBooks(e));
    };
    foo();
  }, []);

  return (
    <>
      <div id="authorGridContainer">
        <div className="authorImg">
          <img src={img.src}></img>
        </div>
        <div>
          <p className="authorText">{records && records.name}</p>
        </div>
        <div>
          <StarIcons></StarIcons>
        </div>
        <div className="authorSlideshow">
          <div id="booksSlideshow">
            <p>Books:</p>
            {authorBooks.length > 0 && <Slideshow books={authorBooks} />}
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Author;
