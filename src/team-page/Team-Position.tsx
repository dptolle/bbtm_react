import React, { Fragment } from 'react';

interface Player {
  name: string;
  position: string;
  ma: number;
  st: number;
  ag: string;
  ts: string;
  av: string;
  skills: string[];
}

interface TeamPositionProps {
    number: number;
    player: Player;
}
function TeamPosition(props: TeamPositionProps) {
    const { number } = props;
  return (
    <tr>
      <td>{number}</td>
      {Array.from({ length: 2 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  );
}

export default TeamPosition;
