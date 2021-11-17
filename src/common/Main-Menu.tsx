import { MenuItem, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { logout } from "../utils/firebaseAuth";
import { ROUTE } from "../utils/routes";

function MainMenu() {
  const history = useHistory();

  return (
    <>
      <MenuItem onClick={() => history.push(ROUTE.TEAM_SELECTION)}>
        <Typography>Team Selection</Typography>
      </MenuItem>
      <MenuItem onClick={logout}>
        <Typography>Logout</Typography>
      </MenuItem>
    </>
  );
}

export default MainMenu;
