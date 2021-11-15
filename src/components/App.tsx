import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../login-page/Login-Page';
import TeamPage from '../team-page/Team-Page';
import TeamSelectionPage from '../team-selection-page/Team-Selection-Page';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import bbTheme from './bb-theme';
import { Typography } from '@mui/material';
import { AuthProvider } from '../contexts/AuthContext';
import { ROUTE } from '../utils/routes';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

const App: React.FC = () => {

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={bbTheme}>
        <AuthProvider>
          <Router>
            <Switch>
              <UnauthenticatedRoute path={ROUTE.LOGIN} exact component={LoginPage} />
              <AuthenticatedRoute path={ROUTE.TEAM} component={TeamPage} />
              <AuthenticatedRoute
                path={ROUTE.TEAM_SELECTION}
                component={TeamSelectionPage}
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
}

export default App;
