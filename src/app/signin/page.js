'use client';
import pb from '../(lib)/pocketbase';
import '../globals.css';
import { Card, Input, Row, Spacer, Button, Loading } from '@nextui-org/react';
import Rows from '../components/Rows';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LinkableComponent from '../components/LinkableComponent';

const SignIn = () => {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const submit = async (data) => {
    setLoading(true);
    try {
      await pb
        .collection('users')
        .authWithPassword(data.username, data.password);
      await setTimeout(() => {}, 500);
      setLoading(false);
      window.alert('Successfully signed in!');
      router.push('/');
    } catch (error) {
      alert('Incorrect username or password!');
    }
    setLoading(false);
  };

  const components = [
    <Input
      key="0"
      bordered
      labelPlaceholder="Username"
      color="#22b573"
      width="80%"
      {...register('username')}
    />,
    <Input.Password
      key="1"
      bordered
      labelPlaceholder="Password"
      color="#22b573"
      width="80%"
      {...register('password')}
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
                left: 100,
                backgroundColor: '#22b573',
              }}
              type="submit"
            >
              {isLoading ? <Loading /> : 'Log in'}
            </Button>
            <LinkableComponent
              component={
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
              link="createuser"
            />
          </form>
        </Row>
        <Spacer y={2}></Spacer>
      </Card.Body>
    </Card>
  );
};

export default SignIn;
