import { Stack, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import DisplayField from '../components/Display-Field';

function TeamManagement() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Stack spacing={2} sx={{
      width: matches ? '33%' : '100%'
    }}>
      <DisplayField label="Coach" value="Bob the Builder"></DisplayField>
      <DisplayField label="Team Type" value="Undead"></DisplayField>
    </Stack>
  );
}

export default TeamManagement;
