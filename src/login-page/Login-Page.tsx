import React, { Fragment } from 'react';
import LoginMain from './Login-Main';
import LargeHeader from '../components/LargeHeader';
import MobileFooter from '../components/MobileFooter';

function LoginPage() {
  return (
    <Fragment>
      <LargeHeader title=""></LargeHeader>
      <LoginMain></LoginMain>
      <MobileFooter></MobileFooter>
    </Fragment>
  );
}

export default LoginPage;
