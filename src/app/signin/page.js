'use client';
import pb from '../(lib)/pocketbase';
import '../globals.css';
import { Card, Input, Row, Spacer, Button } from '@nextui-org/react';
import Rows from '../newbook/Rows';
import { useForm } from 'react-hook-form';

const components = [
  <Input bordered labelPlaceholder="Email" color="#22b573" width="80%" />,
  <Input.Password
    bordered
    labelPlaceholder="Password"
    color="#22b573"
    width="80%"
  />,
];

const year = new Date().getFullYear();

const page = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <h1>Logged in: {pb.authStore.isValid.toString()}</h1>
      <Card css={{ mw: '600px', minHeight: '600px', margin: 'auto' }}>
        <Card.Body>
          <h1
            style={{ textAlign: 'center', color: '#22b573', marginBottom: 40 }}
          >
            Fill in email and password to log in or sign up
          </h1>
          <Rows components={components} gap={2}></Rows>
          <Row>
            {
              <Button
                css={{
                  position: 'fixed',
                  left: 100,
                  backgroundColor: '#22b573',
                }}
              >
                Log in
              </Button>
            }
            {
              <Button
                css={{
                  position: 'fixed',
                  right: 100,
                  backgroundColor: '#22b573',
                }}
              >
                Create new user
              </Button>
            }
          </Row>
          <Spacer y={2}></Spacer>
        </Card.Body>
      </Card>
    </>
  );
};

export default page;
