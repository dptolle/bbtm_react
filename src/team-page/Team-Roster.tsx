import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import TeamPosition from './Team-Position';

function TeamRoster() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const usedHeading = matches ? headings : headings.slice(0, 2);
  const numberOfDisplayedAttributes = matches ? 14 : 2;

  return (
    <Stack>
      <Typography variant="h2">Team Roster</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="label">#</Typography>
            </TableCell>
            {usedHeading.map((heading, index) => (
              <TableCell variant="head" key={index}>
                <Typography variant="label">{heading}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 16 }).map((_, index) => (
            <TeamPosition length={numberOfDisplayedAttributes} number={index + 1} player={team[index]} />
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}


const headings = [
  'Name',
  'Position',
  'BE',
  'ST',
  'GE',
  'WG',
  'RW',
  'Fertigkeiten',
  'Anwerbekosten',
  'Verfügb. SPP',
  'VNS',
  'HV',
  'AD',
  'Momentaner Wert',
];

const team = [
  {
    name: 'Bob',
    position: 'Mummy',
    ma: 3,
    st: 5,
    ag: '5+',
    ts: '-',
    av: '10+',
    skills: ['Regeneration', 'Might Blow (+1)'],
  },
  {
    name: 'Bob',
    position: 'Mummy',
    ma: 3,
    st: 5,
    ag: '5+',
    ts: '-',
    av: '10+',
    skills: ['Regeneration', 'Might Blow (+1)'],
  },
  {
    name: 'Bob',
    position: 'Ghoul Runner',
    ma: 7,
    st: 3,
    ag: '3+',
    ts: '4+',
    av: '8+',
    skills: ['Dodge'],
  },
  {
    name: 'Bob',
    position: 'Ghoul Runner',
    ma: 7,
    st: 3,
    ag: '3+',
    ts: '4+',
    av: '8+',
    skills: ['Dodge'],
  },
  {
    name: 'Bob',
    position: 'Wight Blitzer',
    ma: 6,
    st: 3,
    ag: '3+',
    ts: '5+',
    av: '9+',
    skills: ['Block', 'Regeneration'],
  },
  {
    name: 'Bob',
    position: 'Wight Blitzer',
    ma: 6,
    st: 3,
    ag: '3+',
    ts: '5+',
    av: '9+',
    skills: ['Block', 'Regeneration'],
  },
  {
    name: 'Bob',
    position: 'Skeleton Lineman',
    ma: 5,
    st: 3,
    ag: '4+',
    ts: '6+',
    av: '8+',
    skills: ['Thick Skull', 'Regeneration'],
  },
  {
    name: 'Bob',
    position: 'Skeleton Lineman',
    ma: 5,
    st: 3,
    ag: '4+',
    ts: '6+',
    av: '8+',
    skills: ['Thick Skull', 'Regeneration'],
  },
  {
    name: 'Bob',
    position: 'Skeleton Lineman',
    ma: 5,
    st: 3,
    ag: '4+',
    ts: '6+',
    av: '8+',
    skills: ['Thick Skull', 'Regeneration'],
  },
  {
    name: 'Bob',
    position: 'Zombie Lineman',
    ma: 4,
    st: 3,
    ag: '4+',
    ts: '-',
    av: '9+',
    skills: ['Regeneration'],
  },
  {
    name: 'Bob',
    position: 'Zombie Lineman',
    ma: 4,
    st: 3,
    ag: '4+',
    ts: '-',
    av: '9+',
    skills: ['Regeneration'],
  },
  {
    name: 'Bob',
    position: 'Zombie Lineman',
    ma: 4,
    st: 3,
    ag: '4+',
    ts: '-',
    av: '9+',
    skills: ['Regeneration'],
  },
  {
    name: 'Bob',
    position: 'Zombie Lineman',
    ma: 4,
    st: 3,
    ag: '4+',
    ts: '-',
    av: '9+',
    skills: ['Regeneration'],
  },
];

export default TeamRoster;
