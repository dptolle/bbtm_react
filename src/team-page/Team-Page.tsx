import React from "react";
import TeamMain from "./Team-Main";
import HeaderBar from "../common/Header-Bar";
import FooterBar from "../common/Footer-Bar";

function TeamPage() {
  return (
    <>
      <HeaderBar title="Team"></HeaderBar>
      <TeamMain></TeamMain>
      <FooterBar fabAction={() => null}></FooterBar>
    </>
  );
}

export default TeamPage;
