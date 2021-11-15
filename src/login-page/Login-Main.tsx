import { Container, Stack } from '@mui/material';
import React from 'react';
import LoginBox from './Login-Box';

function LoginMain() {

  return (
    <Container
      sx={{
        height: '100%',
      }}
    >
      <Stack
        spacing={2}
        direction="column-reverse"
        sx={{
          margin: '0 auto',
          height: '75%',
          justifyContent: 'space-evenly',
          maxWidth: '625px',
          alignItems: 'center'
        }}
      >
        <LoginBox></LoginBox>
        <img
          src="blood-bowl-logo-660x330.jpeg"
          alt="Blood Bowl logo"
        />
      </Stack>
    </Container>
  );
}

export default LoginMain;
