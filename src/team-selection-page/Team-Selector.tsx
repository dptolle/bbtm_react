import React from 'react';
import TeamSelectionItem from './Team-Selection-Item';
import { Divider, Stack, useMediaQuery, useTheme } from '@mui/material';
import TeamAdditionButton from './Team-Addition-Button';

function TeamSelector() {

  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Stack
      divider={isLarge ? undefined : <Divider color="primary" flexItem />}
      spacing={isLarge ? 4 : 1}
      direction={isLarge ? 'row' : 'column'}
      sx={{
        flexWrap: 'wrap'
      }}
    >
      <TeamSelectionItem name="Undead Shamblers" />
      <TeamSelectionItem name="Reikland Reavers" />
      {isLarge ?  <TeamAdditionButton /> : undefined }
    </Stack>
  );
}

export default TeamSelector;
