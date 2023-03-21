import { Card, Spacer, Textarea } from '@nextui-org/react';
import StarIconsWithButton from './StarIconsWithButton';
import { useState } from 'react';
import ReviewView from './ReviewView';

const CustomCard = (props) => {
  console.log(props.reviews, 'this is it');

  const reviewViews = props.reviews.length
    ? props.reviews.map((review, index) => (
        <div key={index}>
          <ReviewView rating={review.rating} text={review.review}></ReviewView>
          <Spacer y={1}></Spacer>
        </div>
      ))
    : [
        <div key="default">
          <ReviewView rating={0} text={'No reviews yet'}></ReviewView>
          <Spacer y={1}></Spacer>
        </div>,
      ];

  return (
    <div className="parent-div">
      <h1 style={{ color: '#22b573' }}>Reviews</h1>
      <Card
        variant="flat"
        css={{
          width: 400,
          height: 400,
          margin: 'auto',
          overflowY: 'scroll',
        }}
      >
        <Card.Body>{reviewViews}</Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
