import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import BookCard from './BookCard';
import pb from '../(lib)/pocketbase';
import { useState, useRef } from 'react';

const BookContainer = ({ title }) => {
  const [records, setRecords] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const foo = async () => {
      const fetchedRecords = await pb
        .collection('books')
        .getFullList(200 /* batch size */, {
          sort: '-created',
        });

      setRecords(fetchedRecords.slice(0, 4));
    };
    foo();
  }, []);

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
        <BookCard bookid={records[0].id} />
        <BookCard bookid={records[1].id} />
        <BookCard bookid={records[2].id} />
        <BookCard bookid={records[3].id} />
      </Box>
    </Box>
  );
};

export default BookContainer;
