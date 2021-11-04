import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../login-page/Login-Page';
import TeamPage from '../team-page/Team-Page';
import TeamSelectionPage from '../team-selection-page/Team-Selection-Page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/team-selection" component={TeamSelectionPage} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
