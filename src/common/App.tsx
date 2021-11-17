import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LoginPage from "../login-page/Login-Page";
import TeamPage from "../team-page/Team-Page";
import TeamSelectionPage from "../team-selection-page/Team-Selection-Page";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import bbTheme from "../utils/bb-theme";
import { Typography } from "@mui/material";
import { AuthProvider } from "../contexts/AuthContext";
import { ROUTE } from "../utils/routes";
import AuthenticatedRoute from "./Authenticated-Route";
import UnauthenticatedRoute from "./Unauthenticated-Route";
import TeamCreationPage from "../team-creation/Team-Creation-Page";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={bbTheme}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Redirect to={ROUTE.LOGIN}></Redirect>
              </Route>
              <UnauthenticatedRoute path={ROUTE.LOGIN} component={LoginPage} />
              <AuthenticatedRoute path={ROUTE.TEAM} component={TeamPage} />
              <AuthenticatedRoute
                path={ROUTE.TEAM_SELECTION}
                component={TeamSelectionPage}
              />
              <AuthenticatedRoute
                path={ROUTE.TEAM_CREATION}
                component={TeamCreationPage}
              />
              <Route
                render={() => (
                  <Typography variant="h1">404: page not found</Typography>
                )}
              />
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
