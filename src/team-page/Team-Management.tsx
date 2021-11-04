import React from 'react';
import DisplayField from '../components/Display-Field';

function TeamManagement() {
  return (
    <div className="container-flex team-management-container">
      <DisplayField label="Coach" value="Bob the Builder"></DisplayField>
      <DisplayField label="Team Type" value="Undead"></DisplayField>
    </div>
  );
}

export default TeamManagement;
