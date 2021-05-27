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
    <Router>
      <MainContainer>
        <Switch>
          <Route path="/form">
            <UsersForm />
          </Route>
          <Route path="/" exact>
            <UsersList />
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  );
}