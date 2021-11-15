import React from 'react';
import TeamSelectionItem from './Team-Selection-Item';
import { Divider, Stack, useMediaQuery, useTheme } from '@mui/material';
import TeamAdditionButton from './Team-Addition-Button';

function TeamSelector() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Stack
      divider={matches ? undefined : <Divider color="primary" flexItem />}
      spacing={matches ? 4 : 1}
      direction={matches ? 'row' : 'column'}
    >
      <TeamSelectionItem name="Undead Shamblers" />
      <TeamSelectionItem name="Reikland Reavers" />
      {matches ?  <TeamAdditionButton /> : undefined }
    </Stack>
  );
}

export default TeamSelector;
