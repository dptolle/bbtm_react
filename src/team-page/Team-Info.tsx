import { Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { Fragment } from 'react';
import TeamProgress from './Team-Progress';
import TeamValue from './Team-Value';

function TeamInfo() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Fragment>
      <Typography variant="h2">
        Team Information
      </Typography>
      <Stack
        divider={matches ? undefined : <Divider flexItem />}
        spacing={2}
        direction={
          matches ? 'row' : 'column'
        }
        sx={{justifyContent:'space-between'}}
      >
        <TeamProgress></TeamProgress>
        <TeamValue></TeamValue>
      </Stack>
    </Fragment>
  );
}

export default TeamInfo;
