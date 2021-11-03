import React from 'react';
import LoginBox from './Login-Box';

function LoginPage() {
  return (
    <main className="login-container container-flex">
      <LoginBox className="login-container__item"></LoginBox>
      <img
        className="login-container__logo login-container__item"
        src="blood-bowl-logo-660x330.jpeg"
        alt="Blood Bowl logo"
      />
    </main>
  );
}

export default LoginPage;
