import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../login-page/Login-Page';
import TeamPage from '../team-page/Team-Page';
import TeamSelectionPage from '../team-selection-page/Team-Selection-Page';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import bbTheme from './bb-theme';
import { Typography } from '@mui/material';

const App: React.FC = () => {

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={bbTheme}>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/team" component={TeamPage} />
            <Route path="/team-selection" component={TeamSelectionPage} />
            <Route
              render={() => (
                <Typography variant="h1">404: page not found</Typography>
              )}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
