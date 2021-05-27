import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MainContainer } from './containers';

import { 
  UsersForm, 
  UsersList 
} from './pages';

export default function Routes() {
  return (
    <Router basename={'/zustand-example'}>
      <MainContainer>
        <Switch>
          <Route path="/form" render={(props) => <UsersForm {...props} />} />
          <Route path="/" exact render={(props) => <UsersList {...props} />} />
        </Switch>
        </MainContainer>
    </Router>
  );
}