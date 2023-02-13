'use client';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import SearchBar from './SearchBar';
import Image from 'next/image';
import LinkableComponent from './LinkableComponent';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: 7,
        marginTop: 2,
        marginLeft: 2,
        marginRight: 2,
      }}
    >
      <Grid container spacing={0}>
        <Grid xs={1}>
          <LinkableComponent
            link="/"
            component={
              <Image src="/bookhublogo.png" width={150} height={50} alt="" />
            }
          ></LinkableComponent>
        </Grid>
        <Grid xs={6} mdOffset={2}>
          <SearchBar />
        </Grid>
        <Grid xs={1} mdOffset={1}>
          <Button variant="outlined" color="success">
            Log in
          </Button>
        </Grid>
        <Grid xs={1} mdOffset={'auto'}>
          <LinkableComponent
            link="/signup"
            component={
              <Button variant="contained" color="success" className="Button">
                Sign up
              </Button>
            }
          ></LinkableComponent>
        </Grid>
      </Grid>
    </Box>
  );
}
