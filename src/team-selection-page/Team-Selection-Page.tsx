import React, { Fragment } from 'react';
import LargeHeader from '../components/LargeHeader';
import MobileFooter from '../components/MobileFooter';
import TeamSelectionMain from './Team-Selection-Main';

function TeamSelectionPage() {
  return (
    <Fragment>
      <LargeHeader title="Team Selection"></LargeHeader>
      <TeamSelectionMain></TeamSelectionMain>
      <MobileFooter></MobileFooter>
    </Fragment>
  );
}

export default TeamSelectionPage;
