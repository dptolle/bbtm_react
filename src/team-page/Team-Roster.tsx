import React from 'react';
import Table from 'react-bootstrap/Table';
import TeamPosition from './Team-Position';

function TeamRoster() {

  return (
    <div className="team-roster">
      <h2 className="fancy-font">Team Roster</h2>
      <Table className="hide-on-large">
        <thead>
          <tr>
            <th>#</th>
            {headings.slice(0, 2).map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 16 }).map((_, index) => (
            <TeamPosition length={2} number={index + 1} player={team[index]} />
          ))}
        </tbody>
      </Table>
      <Table className="hide-on-small">
        <thead>
          <tr>
            <th>#</th>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 16 }).map((_, index) => (
            <TeamPosition length={14} number={index + 1} player={team[index]} />
          ))}
        </tbody>
      </Table>
    </div>
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
