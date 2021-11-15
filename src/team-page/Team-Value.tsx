import { Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import DisplayField from '../components/Display-Field';

function TeamValue() {
  return (
    <Stack spacing={2}>
      <Table size="small" aria-label="Team Value">
        <TableBody>
          {entry.map((e) => {
            return (
              <SplitRowValue
                label={e.label}
                value={e.value}
                constant={e.constant}
              ></SplitRowValue>
            );
          })}
        </TableBody>
      </Table>
      <Stack spacing={1}>
        <DisplayField label="Teamwert" value=""></DisplayField>
        <DisplayField label="Momentaner Teamwert" value=""></DisplayField>
      </Stack>
    </Stack>
  );
}

interface SplitRowValueProps {
  label: string;
  value: number;
  constant: number;
}

function SplitRowValue(props: SplitRowValueProps) {
  const { label, value, constant } = props;
  return (
    <Fragment>
      <TableRow>
        <TableCell sx={{ borderBottom: 'none' }}>
          <Typography variant="label">{label}</Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: 'none' }}>
          <Typography>{value}</Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ borderBottom: 'none' }}></TableCell>
        <TableCell sx={{ borderBottom: 'none' }}>
          <Typography variant="label">x</Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: 'none' }}>
          <Typography variant="label"> {constant} GS</Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: 'none' }}>
          <Typography>{value * constant}</Typography>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

const entry = [
  {
    label: 'Wiederholumgswürfe',
    value: 2,
    constant: 70000,
  },
  {
    label: 'Assistenten',
    value: 2,
    constant: 10000,
  },
  {
    label: 'Cheerleaders',
    value: 2,
    constant: 10000,
  },
  {
    label: 'Sanitäter',
    value: 2,
    constant: 50000,
  }
];
export default TeamValue;
