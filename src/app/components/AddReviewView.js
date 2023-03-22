import { Card, Spacer, Textarea } from '@nextui-org/react';
import StarIconsWithButton from './StarIconsWithButton';
import { useState } from 'react';

const AddReviewView = (prop) => {
  const [description, setDescription] = useState('');
  const [bookid, setBookid] = useState(prop.bookid);

  return (
    <Card
      css={{
        mw: '400px',
        minHeight: '200px',
        margin: 'auto',
      }}
    >
      <Card.Body>
        <StarIconsWithButton bookid={bookid} description={description} />
        <Spacer y={2}></Spacer>
        <Textarea
          id="review"
          bordered
          labelPlaceholder="Review"
          color="#22b573"
          width="80%"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Card.Body>
    </Card>
  );
};

export default AddReviewView;
