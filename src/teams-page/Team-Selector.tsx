import React from 'react';
import TeamSelectionItem from './Team-Selection-Item';

function TeamSelector() {
  return (
    <div className="team-selection">
      <TeamSelectionItem />
      <TeamSelectionItem />
    </div>
  );
}

export default TeamSelector;
