import { Card, Spacer, Textarea } from '@nextui-org/react';
import StarIconsWithButton from './StarIconsWithButton';
import { useState } from 'react';
import ReviewView from './ReviewView';

const CustomCard = () => {
  const [description, setDescription] = useState('');

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
        <Card.Body>
          <ReviewView></ReviewView>
          <Spacer y={1}></Spacer>
          <ReviewView></ReviewView>
          <Spacer y={1}></Spacer>
          <ReviewView></ReviewView>
          <Spacer y={1}></Spacer>
          <ReviewView></ReviewView>
          <Spacer y={1}></Spacer>
          <ReviewView></ReviewView>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
