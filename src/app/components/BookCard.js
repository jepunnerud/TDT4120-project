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
pb.autoCancellation(false);

const BookCard = ({ bookid }) => {
  const [book, setBook] = useState({ rating: 0 });
  const clickOnBook = () => {
    window.location.href = `http://localhost:3000/bookpage/${bookid}`;
  };

  useEffect(() => {
    const loadBookInfo = async () => {
      if (bookid != undefined) {
        const record = await pb.collection('books').getOne(bookid);
        setBook(record);
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
          book
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
          <Rating name="rating" value={book.rating} max={5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {book.rating}/5
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default BookCard;
