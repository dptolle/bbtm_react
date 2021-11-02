import React from 'react';
import { Route } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import PageLayout from './Page-Layout';
import TeamsPage from '../teams-page/Teams-Page';

function MasterPage() {
  return (
    <PageLayout>
      <Header></Header>
      <Route path="/teams" component={TeamsPage} />
      <Footer></Footer>
    </PageLayout>
  );
}

export default MasterPage;
