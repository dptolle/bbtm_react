import React from 'react';

interface TeamSelectoionItemProps {
  name: string;
}

function TeamSelectoionItem(props: TeamSelectoionItemProps) {
  const { name } = props;
  return (
    <div className="team-selection-item">
      <span className="fancy-font team-selection-item__name">{name}</span>
      <img
        className="team-selection-item__logo"
        src="bb-button.png"
        alt="Blood Bowl Button"
      ></img>
    </div>
  );
}

export default TeamSelectoionItem;
