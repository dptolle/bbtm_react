import { Stack } from '@mui/material';
import React from 'react';
import DisplayField from '../components/Display-Field';

function TeamProgress() {
  return (
    <Stack spacing={2}>
      <DisplayField label="Teamkasse" value="40000"></DisplayField>
      <DisplayField label="Fans" value="0"></DisplayField>
      <DisplayField label="Touchdowns" value="0"></DisplayField>
      <DisplayField label="VSA" value="0"></DisplayField>
      <DisplayField label="Ligapunkte" value="0"></DisplayField>
    </Stack>
  );
}

export default TeamProgress;
