'use client';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import SearchBar from './SearchBar';
import Image from 'next/image';
import LinkableComponent from './components/LinkableComponent';
import AccountMenu from './AccountMenu';
import { Button } from '@nextui-org/react';
import pb, { getUserById } from './(lib)/pocketbase';
import { useEffect, useState } from 'react';

export default function NavBar() {
  // const [admin, setAdmin] = useState(false);

  // useEffect(() => {
  //   const a = async () => {
  //     if (pb.authStore.isValid) {
  //       const user = await getUserById(pb.authStore.model.id);
  //       setAdmin(user[2]);
  //     }
  //     console.log(admin);
  //   };
  //   a();
  // }, []);

  // const chooseComponent = () => {
  //   if (admin)
  //     return (
  //       <LinkableComponent
  //         link="/newbook"
  //         component={
  //           <Button
  //             css={{
  //               position: 'absolute',
  //               top: 15,
  //               right: 90,
  //               backgroundColor: '#22b573',
  //             }}
  //             auto
  //             width={10}
  //           >
  //             New Book
  //           </Button>
  //         }
  //       />
  //     );
  //   return;
  // };

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
                  position: 'absolute',
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
