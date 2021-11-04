import React from 'react';
import PageLayout from '../components/Page-Layout';
import LoginMain from './Login-Main';
import StandardHeader from '../components/StandardHeader';
import StandardFooter from '../components/StandardFooter';

function LoginPage() {
  return (
    <PageLayout>
      <StandardHeader title=""></StandardHeader>
      <LoginMain></LoginMain>
      <StandardFooter></StandardFooter>
    </PageLayout>
  );
}

export default LoginPage;
