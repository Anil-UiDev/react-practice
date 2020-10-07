import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CardContainer from './card-container/card-container';
import NotFound from './not-found';
import Form from './form';
import Profile from './profile/profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/not-found" exact component={NotFound} />
        <Route path="/form" component={Form} />
        <Route path="/" exact component={CardContainer} />
        <Redirect from="/profile" to="/" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
