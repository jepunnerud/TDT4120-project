import { Card, Spacer } from '@nextui-org/react';
import ReviewView from './ReviewView';

const CustomCard = (props) => {
  const reviewViews = props.reviews.length
    ? props.reviews.map((review, index) => (
        <div key={index}>
          <ReviewView rating={review.rating} text={review.review}></ReviewView>
          <Spacer y={1}></Spacer>
        </div>
      ))
    : [<h2 key="default">No reviews yet provided</h2>];

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
