import { Stack, Typography } from '@mui/material';
import React from 'react';

export interface DisplayFieldProps {
    label: string;
    value: string;
}

function DisplayField(props: DisplayFieldProps) {
    const {label, value} = props;
  return (
    <Stack direction='row' spacing={2} sx={{justifyContent:'space-between'}}>
      <Typography variant="label">
        {label}:
      </Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
}

export default DisplayField;
