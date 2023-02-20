'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const BookCard = ({ title, rating, imgPath }) => {
  return (
    <Card style={{ height: 300, width: 200 }}>
      <CardMedia
        component="img"
        height="200"
        image={imgPath ? imgPath : 'https://source.unsplash.com/random'}
        alt="Random image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Rating name="rating" value={rating} max={5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {rating}/5
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard;
