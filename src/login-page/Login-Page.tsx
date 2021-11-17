import React, { Fragment } from "react";
import LoginMain from "./Login-Main";
import HeaderBar from "../common/Header-Bar";
import FooterBar from "../common/Footer-Bar";

function LoginPage() {
  return (
    <Fragment>
      <HeaderBar title=""></HeaderBar>
      <LoginMain></LoginMain>
      <FooterBar fabAction={() => null}></FooterBar>
    </Fragment>
  );
}

export default LoginPage;
