'use client';
import { Card, Col, Row, Button, Text } from '@nextui-org/react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Card1({ bookname, authorname, imageURL }) {
  return (
    <Card
      css={{
        w: '100%',
        h: '400px',
        transition: 'transform 0.08s ease-in-out',
        '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
      }}
    >
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={imageURL}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container>
          <Text h3 weight="bold" transform="upperscase" color="black">
            {bookname}
          </Text>
          <Text h3 color="black">
            {authorname}
          </Text>
        </Container>
        <Box sx={{ marginRight: 3 }}>
          <Button flat auto rounded color="secondary">
            <Text
              css={{ color: 'inherit' }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              Save book
            </Text>
          </Button>
        </Box>
      </Card.Footer>
    </Card>
  );
}
