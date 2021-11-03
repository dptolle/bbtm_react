import React from 'react';
import { Link } from 'react-router-dom';
import TeamSelectionItem from './Team-Selection-Item';

function TeamSelector() {
  return (
    <div className="team-selection container-flex">
      <Link to="/team">
        <TeamSelectionItem name="Undead Shamblers" />
      </Link>
      <TeamSelectionItem name="Reikland Reavers" />
    </div>
  );
}

export default TeamSelector;
