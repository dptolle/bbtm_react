import React from "react";
import FooterBar from "../common/Footer-Bar";
import HeaderBar from "../common/Header-Bar";
import TeamCreationMain from "./Team-Creation-Main";

function TeamCreationPage() {
  return (
    <>
      <HeaderBar title="Team Creation"></HeaderBar>
      <TeamCreationMain></TeamCreationMain>
      <FooterBar></FooterBar>
    </>
  );
}

export default TeamCreationPage;
