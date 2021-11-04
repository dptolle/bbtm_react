import React from 'react';
import PageLayout from '../components/Page-Layout';
import StandardHeader from '../components/StandardHeader';
import StandardFooter from '../components/StandardFooter';
import TeamSelectionMain from './Team-Selection-Main';

function TeamSelectionPage() {
  return (
    <PageLayout>
      <StandardHeader title="Team Selection"></StandardHeader>
      <TeamSelectionMain></TeamSelectionMain>
      <StandardFooter></StandardFooter>
    </PageLayout>
  );
}

export default TeamSelectionPage;
