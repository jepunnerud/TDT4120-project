import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import BookCard from './BookCard';
import pb from '../(lib)/pocketbase';
import { useState } from 'react';

const BookContainer = ({ title, rand }) => {
  const [records, setRecords] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const foo = async () => {
      const fetchedRecords = await pb.collection('books').getFullList();

      setRecords(fetchedRecords);
    };
    foo();
  }, []);

  let count = 0;

  function getRndInteger(min, max) {
    if (rand) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    count += 1;
    return count - 1;
  }

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
        <BookCard bookid={records[getRndInteger(0, records.length - 1)].id} />
        <BookCard bookid={records[getRndInteger(0, records.length - 1)].id} />
        <BookCard bookid={records[getRndInteger(0, records.length - 1)].id} />
        <BookCard bookid={records[getRndInteger(0, records.length - 1)].id} />
      </Box>
    </Box>
  );
};

export default BookContainer;
