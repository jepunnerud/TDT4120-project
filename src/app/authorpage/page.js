'use client';
import About from './AboutSection';
import { User } from '@nextui-org/react';
import { Badge, Grid } from '@nextui-org/react';
import Box from '@mui/material/Box';
function AuthorPage() {
  return (
    <>
      <Box
        sx={{
          height: 500,
          borderRadius: 1,
          top: 10,
          margin: '0 auto',
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <Grid sx={{ justifyConter: 'center' }}>
          <Badge sx={{ margin: '0 auto' }}>Author page</Badge>
        </Grid>
        <User
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          name="Ola Nordmann"
          zoomed
        />
      </Box>
    </>
  );
}

export default AuthorPage;
