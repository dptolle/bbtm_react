import { Fab, AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { getUser } from "../utils/firebaseAuth";
import MenuButton from "./Menu-Button";

interface FooterBarProps {
  fabAction?: Function;
}
function FooterBar({ fabAction }: FooterBarProps) {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("sm"));
  const user = getUser();
  const isActive: boolean = Boolean(!isLarge && user);

  return (
    <AppBar
      component="footer"
      position="fixed"
      color="secondary"
      sx={{ top: "auto", bottom: 0 }}
    >
      <Toolbar
        sx={{
          flexDirection: "row",
          alignItems: "center",
          padding: "1em",
        }}
      >
        {isActive ? (
          <>
            <MenuButton></MenuButton>
            {fabAction ? (
              <Fab
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  top: -30,
                  left: 0,
                  right: 0,
                  margin: "0 auto",
                }}
                color="primary"
                aria-label="add"
                onClick={() => fabAction()}
              >
                <AddIcon />
              </Fab>
            ) : undefined}
          </>
        ) : undefined}
      </Toolbar>
    </AppBar>
  );
}

export default FooterBar;
