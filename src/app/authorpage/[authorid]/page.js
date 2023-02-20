'use client';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import Slideshow from './Slideshow';
import StarIcons from '@/app/components/StarIcons';

import img from './download.jpeg';

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);

function Author() {
  const [books, setBooks] = useState([]);
  const [records, setRecords] = useState([]);

  const fetchBooks = async (bookid) => {
    let records = [];
    bookid.forEach(async (id) => {
      const record = await pb.collection('books').getOne(id);
      records.push(record);
    });
    return records;
  };

  useEffect(() => {
    const foo = async () => {
      const authData = await pb.admins.authWithPassword(
        'jepunnerud@gmail.com',
        'heihei1234'
      );
      const fetchedRecords = await pb
        .collection('authors')
        .getFullList(200 /* batch size */, {
          sort: '-created',
        });

      setRecords(fetchedRecords);
      fetchBooks(fetchedRecords[1].books).then((e) => setBooks(e));
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
          <p className="authorText">{records.length > 0 && records[1].name}</p>
        </div>
        <div>
          <StarIcons></StarIcons>
        </div>
        <div className="authorDescription">
          <p className="authorText">Birthdate: </p>
          <p className="authorText">description</p>
        </div>
        <div className="authorSlideshow">
          <div id="booksSlideshow">
            <p>Books:</p>
            {books.length > 0 && <Slideshow books={books} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Author;
