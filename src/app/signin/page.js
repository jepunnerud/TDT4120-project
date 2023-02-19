'use client';
import pb from '../(lib)/pocketbase';
import '../globals.css';
import { Card, Input, Row, Spacer, Button } from '@nextui-org/react';
import Rows from '../components/Rows';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default () => {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setLoading(true);
    const authData = await pb
      .collection('users')
      .authWithPassword(data.email, data.password);
    setLoading(false);
  };

  const components = [
    <Input
      bordered
      labelPlaceholder="Email"
      color="#22b573"
      width="80%"
      {...register('email')}
    />,
    <Input.Password
      bordered
      labelPlaceholder="Password"
      color="#22b573"
      width="80%"
      {...register('password')}
    />,
  ];

  const year = new Date().getFullYear();

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
                onPress={handleSubmit(login)}
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
                onPress={handleSubmit(login)}
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
