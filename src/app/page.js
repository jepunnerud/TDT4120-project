'use client';
import React from 'react';
import BookContainer from './components/BookContainer';
import { Box } from '@material-ui/core';
import pb from './(lib)/pocketbase';

const Homepage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Logged in: {pb.authStore.isValid.toString()}</h1>
      <Box sx={{ bgcolor: '#F5F5F5', width: '1000px', p: 2, zIndex: 0 }}>
        <BookContainer title="Newly added" rand={false} />
      </Box>
      <Box sx={{ bgcolor: '#F5F5F5', width: '1000px', p: 2, mt: 3, zIndex: 0 }}>
        <BookContainer title="Random suggestions" rand={true} />
      </Box>
    </Box>
  );
};

export default Homepage;
