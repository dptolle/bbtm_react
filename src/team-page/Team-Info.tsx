import React, { Fragment } from 'react';
import DisplayField from '../components/Display-Field';
import TeamProgress from './Team-Progress';
import TeamValue from './Team-Value';

function TeamInfo() {
  return (
    <Fragment>
      <h2 className="fancy-font">Team Information</h2>
      <div className="container-flex team-info-container">
        <TeamProgress></TeamProgress>
        <hr className="hide-on-large"></hr>
        <TeamValue></TeamValue>
      </div>
    </Fragment>
  );
}

export default TeamInfo;
