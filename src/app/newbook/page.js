'use client';
import '../globals.css';
import { Card, Input, Textarea, Row, Spacer, Button } from '@nextui-org/react';
import Rows from './Rows';
import GenreMenu from './GenreMenu';

const components = [
  <Input bordered labelPlaceholder="Title" color="#22b573" width="80%" />,
  <Input bordered labelPlaceholder="Author" color="#22b573" width="80%" />,
  <Textarea
    bordered
    labelPlaceholder="Description"
    color="#22b573"
    width="80%"
  />,
];

const page = () => {
  return (
    <Card css={{ mw: '800px', minHeight: '600px', margin: 'auto' }}>
      <Card.Body>
        <h1 style={{ textAlign: 'center', color: '#22b573', marginBottom: 40 }}>
          Fill in book details
        </h1>
        <Rows components={components} gap={2}></Rows>
        <Row>
          {
            <Input
              bordered
              type="Number"
              labelPlaceholder="Release year"
              color="#22b573"
              width="17%"
              css={{ position: 'fixed', left: 100 }}
            />
          }
          {<GenreMenu style={{ position: 'fixed', right: 100 }} />}
        </Row>
        <Spacer y={5}></Spacer>
        <Row>
          <Button
            css={{
              backgroundColor: '#22b573',
              position: 'fixed',
              left: 300,
            }}
          >
            Submit
          </Button>
        </Row>
        <Spacer y={2}></Spacer>
      </Card.Body>
    </Card>
  );
};

export default page;
