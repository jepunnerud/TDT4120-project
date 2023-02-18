'use client';
import { Grid, Card, Text, Container } from '@nextui-org/react';
import React from 'react';
import BookCard from './components/BookCard';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to my homepage</h1>
      <BookCard title="Lord of the Rings" rating={5} />
    </div>
  );
};

export default Homepage;
