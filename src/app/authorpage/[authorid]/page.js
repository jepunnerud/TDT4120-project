'use client';
import { User } from '@nextui-org/react';
import { Badge, Grid } from '@nextui-org/react';
import Box from '@mui/material/Box';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import { Record } from 'pocketbase';
import Slideshow from './Slideshow';
import StarIcons from '@/app/components/StarIcons';

import img from './download.jpeg';

const pb = new PocketBase('http://127.0.0.1:8090');

import BookCard from '@/app/components/BookCard';

function Author() {
  const [records, setRecords] = useState([]);

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
      console.log(fetchedRecords);
    };
    foo();
  }, []);
  const obj1 = { title: 'book', rating: 5 };
  const obj2 = { title: 'book', rating: 5 };
  const obj3 = { title: 'book', rating: 5 };
  const obj4 = { title: 'book', rating: 5 };
  const obj5 = { title: 'book', rating: 5 };
  const obj6 = { title: 'book', rating: 5 };
  const books = [obj1, obj2, obj3, obj4, obj5, obj6];
  return (
    <>
      <div id="authorGridContainer">
        <div className="authorImg">
          <img src={img.src}></img>
        </div>
        <div>
          <p className="authorText">Name</p>
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
            <Slideshow books={books} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Author;
