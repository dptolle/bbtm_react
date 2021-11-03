import React, { Fragment } from 'react';
import DisplayField from '../components/Display-Field';

function TeamInfo() {
  return (
    <Fragment>
      <h2 className="fancy-font">Team Information</h2>
      <div className="team-progress">
        <DisplayField label="Teamkasse" value="40000"></DisplayField>
        <DisplayField label="Fans" value="0"></DisplayField>
        <DisplayField label="Touchdowns" value="0"></DisplayField>
        <DisplayField label="VSA" value=""></DisplayField>
        <DisplayField label="Ligapunkte" value=""></DisplayField>
      </div>
      <div className="team-value">
        <DisplayField label="Wiederholumgs" value="40000"></DisplayField>
        <DisplayField label="Assistenten" value="0"></DisplayField>
        <DisplayField label="Cheerleaders" value="0"></DisplayField>
        <DisplayField label="Medics" value=""></DisplayField>
        <DisplayField label="Teamwert" value=""></DisplayField>
      </div>
    </Fragment>
  );
}

export default TeamInfo;
