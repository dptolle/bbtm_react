import React, { Fragment } from 'react';
import TeamInfo from './Team-Info';

import TeamManagement from './Team-Management';
import TeamRoster from './Team-Roster';

function TeamPage() {
  return (
    <Fragment>
      <TeamManagement></TeamManagement>
    <TeamRoster></TeamRoster>
    <TeamInfo></TeamInfo>
    </Fragment>
  );
}

export default TeamPage;
