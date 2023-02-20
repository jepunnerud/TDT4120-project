import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import BookCard from './BookCard';

const BookContainer = ({ title }) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{title}</Typography>
        <Button variant="outlined" color="default">
          View All
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        <BookCard title="Book 1" rating={4} />
        <BookCard title="Book 2" rating={5} />
        <BookCard title="Book 3" rating={3} />
        <BookCard title="Book 4" rating={4.5} />
      </Box>
    </Box>
  );
};

export default BookContainer;
