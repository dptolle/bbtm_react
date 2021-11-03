import React  from 'react';

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
    length: number;
}
function TeamPosition(props: TeamPositionProps) {
    const { number, length, player } = props;
    const playerArray = player ? ToArray(player) : [];
  return (
    <tr>
      <td>{number}</td>
      {player ? Array.from({ length: length }).map((_, index) => (
        <td key={index}>{playerArray[index]}</td>
      )) :
      null}
    </tr>
  );
}

function ToArray(player: Player) {
  return [
    player.name,
    player.position,
    player.ma,
    player.st,
    player.ag,
    player.ts,
    player.av,
    player.skills
  ];
}

export default TeamPosition;
