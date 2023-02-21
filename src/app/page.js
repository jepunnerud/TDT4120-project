'use client';
import React from 'react';
import BookContainer from './components/BookContainer';
import { Box } from '@material-ui/core';

const Homepage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box sx={{ bgcolor: '#F5F5F5', width: '1000px', p: 2 }}>
        <BookContainer title="Popular Now" />
      </Box>
      <Box sx={{ bgcolor: '#EFEFEF', width: '1000px', p: 2, mt: 3 }}>
        <BookContainer title="New Releases" />
      </Box>
      <Box sx={{ bgcolor: '#F0F0F0', width: '1000px', p: 2, mt: 3 }}>
        <BookContainer title="Recommended for You" />
      </Box>
    </Box>
  );
};

export default Homepage;
