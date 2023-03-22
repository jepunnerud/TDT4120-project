'use client';
import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useState } from 'react';
import pb from '../(lib)/pocketbase';
import { useRouter } from 'next/navigation';
pb.autoCancellation(false);

const BookCard = ({ bookid }) => {
  const [book, setBook] = useState({ rating: 0 });
  const [avgRating, setAvgRating] = useState(null);
  const router = useRouter();
  const clickOnBook = () => {
    router.push(`/bookpage/${bookid}`);
  };

  useEffect(() => {
    const loadBookInfo = async () => {
      if (bookid != undefined) {
        const record = await pb.collection('books').getOne(bookid);
        setBook(record);

        const fetchedRatings = await pb
          .collection('ratings')
          .getFullList(200, { filter: `book_id = "${bookid}"` });

        if (fetchedRatings.length > 0) {
          const sum = fetchedRatings.reduce(
            (acc, current) => acc + current.rating,
            0
          );
          const averageRating = Math.round(sum / fetchedRatings.length);
          setAvgRating(averageRating);
        } else {
          setAvgRating(0);
        }
      }
    };
    loadBookInfo();
  }, [bookid]);

  return (
    <Card
      onClick={clickOnBook}
      style={{ height: 300, width: 200, cursor: 'pointer' }}
    >
      <CardMedia
        component="img"
        height="200"
        image={
          book.id != undefined
            ? `http://127.0.0.1:8090/api/files/books/${book.id}/${book.image}`
            : ''
        }
        alt="Book Image"
      />
      <CardContent>
        <Typography gutterBottom component="div">
          {book.title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Rating name="rating" value={avgRating} max={5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {avgRating}/5
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default BookCard;
