import React from 'react';
import { Route } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginMain from './Login-Main';
import PageLayout from '../components/Page-Layout';

function LoginPage() {
  return (
    <PageLayout>
        <Header></Header>
        <LoginMain></LoginMain>
        <Footer></Footer>
    </PageLayout>
  );
}

export default LoginPage;
