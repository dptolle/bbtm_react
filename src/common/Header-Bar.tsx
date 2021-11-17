import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getUser } from "../utils/firebaseAuth";
import MenuButton from "./Menu-Button";

export interface HeaderBarProps {
  title: string;
}

function HeaderBar(props: HeaderBarProps) {
  const { title } = props;
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("sm"));
  const user = getUser();

  const isActive: boolean = Boolean(isLarge && user);

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar
        sx={{
          minHeight: "50px",
          flexDirection: "row",
          alignItems: "center",
          padding: "1em",
        }}
      >
        {isActive ? <MenuButton></MenuButton> : undefined}
        <Typography
          variant="h1"
          sx={{
            margin: "0 auto",
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
