import React from 'react';
import PageLayout from '../components/Page-Layout';
import StandardFooter from '../components/StandardFooter';
import TeamMain from './Team-Main';
import TeamHeader from './Team-Header';

function TeamPage() {
  return (
    <PageLayout>
      <TeamHeader></TeamHeader>
      <TeamMain></TeamMain>
      <StandardFooter></StandardFooter>
    </PageLayout>
  );
}

export default TeamPage;
