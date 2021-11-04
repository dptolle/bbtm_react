import React from 'react';
import DisplayField from '../components/Display-Field';

function TeamProgress() {
  return (
      <div className="team-progress-container">
        <DisplayField label="Teamkasse" value="40000"></DisplayField>
        <DisplayField label="Fans" value="0"></DisplayField>
        <DisplayField label="Touchdowns" value="0"></DisplayField>
        <DisplayField label="VSA" value=""></DisplayField>
        <DisplayField label="Ligapunkte" value=""></DisplayField>
      </div>
  );
}

export default TeamProgress;
