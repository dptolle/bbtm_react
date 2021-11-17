import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import HeaderBar from "../common/Header-Bar";
import { ROUTE } from "../utils/routes";
import TeamSelectionMain from "./Team-Selection-Main";
import FooterBar from "../common/Footer-Bar";

function TeamSelectionPage() {
  const history = useHistory();
  return (
    <Fragment>
      <HeaderBar title="Team Selection"></HeaderBar>
      <TeamSelectionMain></TeamSelectionMain>
      <FooterBar
        fabAction={() => history.push(ROUTE.TEAM_CREATION)}
      ></FooterBar>
    </Fragment>
  );
}

export default TeamSelectionPage;
