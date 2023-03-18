'use client';
import pb from '../(lib)/pocketbase';
import '../globals.css';
import { Card, Input, Row, Spacer, Button, Loading } from '@nextui-org/react';
import Rows from '../components/Rows';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default () => {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const submit = async (data) => {
    setLoading(true);
    try {
      await pb
        .collection('users')
        .create({
          username: data.username,
          password: data.password,
          passwordConfirm: data.passwordConfirm,
        })
        .then(() => {
          pb.collection('users').authWithPassword(data.username, data.password);
          setTimeout(() => {}, 500);
          setLoading(false);
          window.alert('New user created!');
          router.push('/');
        });
    } catch (error) {
      alert("User already exists, or the passwords don't match.");
    }
    setLoading(false);
  };

  const components = [
    <Input
      bordered
      labelPlaceholder="Username"
      color="#22b573"
      width="80%"
      {...register('username')}
    />,
    <Input.Password
      bordered
      labelPlaceholder="Password"
      color="#22b573"
      width="80%"
      {...register('password')}
    />,
    <Input.Password
      bordered
      labelPlaceholder="Please confirm your password"
      color="#22b573"
      width="80%"
      {...register('passwordConfirm')}
    />,
  ];

  return (
    <Card css={{ mw: '600px', minHeight: '600px', margin: 'auto' }}>
      <Card.Body>
        <h1 style={{ textAlign: 'center', color: '#22b573', marginBottom: 40 }}>
          Fill in username and password to log in or sign up
        </h1>
        <Rows components={components} gap={2}></Rows>
        <Row>
          <form onSubmit={handleSubmit(submit)}>
            <Button
              css={{
                position: 'fixed',
                left: 200,
                backgroundColor: '#22b573',
              }}
              type="submit"
            >
              {isLoading ? <Loading /> : 'Create user'}
            </Button>
          </form>
        </Row>
        <Spacer y={2}></Spacer>
      </Card.Body>
    </Card>
  );
};
