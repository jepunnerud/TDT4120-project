import { Card, Spacer, Textarea } from '@nextui-org/react';
import StarIconsWithButton from './StarIconsWithButton';
import { useState } from 'react';
import StarIcons from './StarIcons';
import { Rating } from '@material-ui/lab';

const ReviewView = (review) => {
  const [description, setDescription] = useState('');

  return (
    <Card css={{ width: '350px', minHeight: '100px', margin: 'auto' }}>
      <Rating name="user-rating" value={review.rating} readOnly></Rating>
      <Textarea id="review" width="80%" readOnly initialValue={review.text} />
    </Card>
  );
};

export default ReviewView;
