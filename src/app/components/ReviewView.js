import { Card, Textarea } from '@nextui-org/react';
import { Rating } from '@material-ui/lab';

const ReviewView = (review) => {
  return (
    <Card css={{ width: '350px', minHeight: '100px', margin: 'auto' }}>
      <Rating name="user-rating" value={review.rating} readOnly></Rating>
      <Textarea
        id="review"
        width="80%"
        readOnly
        initialValue={
          review.text ? review.text : 'No review text was provided.'
        }
      />
    </Card>
  );
};

export default ReviewView;
