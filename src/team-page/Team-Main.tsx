import { Container, Stack } from '@mui/material';
import React from 'react';
import TeamInfo from './Team-Info';

import TeamManagement from './Team-Management';
import TeamRoster from './Team-Roster';

function TeamMain() {
  return (
    <Container sx={{ paddingBottom: '100px', paddingTop: '2em' }}>
      <Stack spacing={2}>
        <TeamManagement></TeamManagement>
        <TeamRoster></TeamRoster>
        <TeamInfo></TeamInfo>
      </Stack>
    </Container>
  );
}

export default TeamMain;
