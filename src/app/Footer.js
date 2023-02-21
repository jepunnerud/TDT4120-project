'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Copyright() {
  return (
    <Typography color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        bookhub.no
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function BoxSx() {
  return (
    <Box
      sx={{
        height: 100,
        borderRadius: 1,
        position: 'relative',
        marginTop: 5,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
      }}
    >
      <Container sx={{ marginLeft: 1 }}>
        <Typography>bookhub</Typography>
        <Copyright />
      </Container>

      <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 3 }}>
        <IconButton
          variant="solid"
          href="https://www.instagram.com/"
          target={'_blank'}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          variant="solid"
          href="https://www.facebook.com/"
          target={'_blank'}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          variant="solid"
          href={`mailto:contact@bookhub.no`}
          target={'_blank'}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          variant="solid"
          href="https://www.google.com/search?q=ntnu&sxsrf=AJOqlzXlChy3ngODjzHoIIRO5cKeaA1T6A:1676285712086&ei=ChfqY-eLE42QrgT31YFY&ved=2ahUKEwj8uaTzqpL9AhXxtYsKHebEBW4QvS56BAgTEAE&uact=5&oq=ntnu+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIJCC4QJxATEOoEMgQIIxAnMgQIIxAnMgsIABCABBCxAxCDATIRCC4QgAQQsQMQgwEQxwEQrwEyBQgAEIAEMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgUILhCABDoKCAAQRxDWBBCwAzoECAAQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBENEDOgcIABCxAxBDOgUIABCxAzoKCAAQsQMQgwEQQ0oECEEYAEoECEYYAFD1BVjGCWD-EGgDcAF4AIABjAGIAagDkgEDNC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp&tbs=lf:1,lf_ui:4&tbm=lcl&rflfq=1&num=10&rldimm=13041836405129582475&lqi=CgRudG51IgOIAQFIxa5fWgoQABgAIgRudG51kgEKdW5pdmVyc2l0eZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOWGNFMDJZa1pSRUFFqgEMEAEqCCIEbnRudSgK&sa=X&rlst=f#rlfi=hd:;si:13041836405129582475,l,CgRudG51IgOIAQFIxa5fWgoQABgAIgRudG51kgEKdW5pdmVyc2l0eZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOWGNFMDJZa1pSRUFFqgEMEAEqCCIEbnRudSgK;mv:[[63.431022399999996,10.411038999999999],[63.39425629999999,10.385072]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4"
          target={'_blank'}
        >
          <LocationOnIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
