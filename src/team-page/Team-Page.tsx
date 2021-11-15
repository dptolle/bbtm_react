import React, { Fragment } from 'react';
import MobileFooter from '../components/MobileFooter';
import TeamMain from './Team-Main';
import LargeHeader from '../components/LargeHeader';

function TeamPage() {
  return (
    <Fragment>
      <LargeHeader title="Team"></LargeHeader>
      <TeamMain></TeamMain>
      <MobileFooter></MobileFooter>
    </Fragment>
  );
}

export default TeamPage;
