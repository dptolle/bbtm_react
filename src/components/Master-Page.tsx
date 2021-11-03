import React, { Fragment } from 'react';
import { Route } from 'react-router';
import PageLayout from './Page-Layout';
import TeamPage from '../team-page/Team-Page';
import TeamSelectionPage from '../team-selection-page/Team-Selection-Page';
import LoginPage from '../login-page/Login-Page';
import StandardHeader from './StandardHeader';
import TeamHeader from '../team-page/Team-Header';

function MasterPage() {
  return (
    <PageLayout>
      <Fragment>
        <Route path="/team" exact component={TeamHeader} />
        <Route path="/team-selection" exact component={StandardHeader} />
        <Route path="/" exact component={StandardHeader} />
      </Fragment>
      <Fragment>
        <Route path="/team" exact component={TeamPage} />
        <Route path="/team-selection" exact component={TeamSelectionPage} />
        <Route path="/" exact component={LoginPage} />
      </Fragment>
      <Fragment></Fragment>
    </PageLayout>
  );
}

export default MasterPage;
