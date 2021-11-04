import React, { Fragment } from 'react';
import DisplayField from '../components/Display-Field';
import TeamProgress from './Team-Progress';
import TeamValue from './Team-Value';

function TeamInfo() {
  return (
    <Fragment>
      <h2 className="fancy-font">Team Information</h2>
      <TeamProgress></TeamProgress>
      <hr></hr>
      <TeamValue></TeamValue>
    </Fragment>
  );
}

export default TeamInfo;
