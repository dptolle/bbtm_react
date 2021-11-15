import { Container } from '@mui/material';
import React from 'react';
import TeamSelector from './Team-Selector';


function TeamSelectionMain() {

  return (
    <Container
      sx={{
        marginTop: '2em',
      }}
    >
      <TeamSelector />
    </Container>
  );
}

export default TeamSelectionMain;
