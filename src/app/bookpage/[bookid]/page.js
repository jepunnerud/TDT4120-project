'use client';
import img from './download.jpeg';
import StarIcons from './StarIcons';
//import pb from '../../(lib)/pocketbase';
import { useEffect, useState } from 'react';

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

function Book({ params }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const foo = async () => {
      const authData = await pb.admins.authWithPassword(
        'jepunnerud@gmail.com',
        'heihei1234'
      );
      const fetchedRecords = await pb
        .collection('books')
        .getFullList(200 /* batch size */, {
          sort: '-created',
        });
      setRecords(fetchedRecords);
      console.log(fetchedRecords);
      console.log(fetchedRecords[0].title);
    };
    foo();
  }, []);

  return (
    <>
      <h1 id="title">Book page {params.bookid}</h1>
      <div id="gridContainer">
        <div className="item tall">
          <img src={img.src} alt="book cover"></img>
        </div>
        <div className="item">
          <h1> {records.length > 0 && records[0].title}</h1>
          <p>by {records.length > 0 && records[0].autor}</p>
        </div>
        <div className="item">
          <StarIcons></StarIcons>
        </div>
        <div className="item">di</div>
        <div className="item">
          {records.length > 0 && records[0].description}
        </div>
        <div className="item">
          <p className="book-text">
            Genre: {records.length > 0 && records[0].genre}
          </p>
          <p>First published: {records.length > 0 && records[0].releaseyear}</p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Book;
