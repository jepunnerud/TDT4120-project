import { Card, Spacer, Textarea } from '@nextui-org/react';
import StarIconsWithButton from './StarIconsWithButton';
import { useState } from 'react';
import StarIcons from './StarIcons';
import { Rating } from '@material-ui/lab';

const ReviewView = () => {
  const [description, setDescription] = useState('');

  return (
    <Card css={{ width: '350px', minHeight: '100px', margin: 'auto' }}>
      <Rating name="user-rating" value={4} readOnly></Rating>
      <Textarea
        id="review"
        width="80%"
        readOnly
        initialValue="This is a review"
      />
    </Card>
  );
};

export default ReviewView;
