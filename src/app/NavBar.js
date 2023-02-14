'use client';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import SearchBar from './SearchBar';
import Image from 'next/image';
import LinkableComponent from './LinkableComponent';
// import Button from '@mui/material/Button';
import AccountMenu from './AccountMenu';
import { Button } from '@nextui-org/react';

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
          />
        </Grid>
        <Grid xs={6} mdOffset={2}>
          <SearchBar />
        </Grid>
        <Grid xs={1} mdOffset={1.5}>
          <LinkableComponent
            link="/newbook"
            component={
              <Button
                css={{
                  position: 'fixed',
                  top: 15,
                  right: 90,
                  backgroundColor: '#22b573',
                }}
                auto
                width={10}
              >
                New Book
              </Button>
            }
          />
        </Grid>
        <Grid>
          <AccountMenu />
        </Grid>
      </Grid>
    </Box>
  );
}
