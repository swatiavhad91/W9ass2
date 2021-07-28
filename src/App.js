import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./home/Home";
import UsersWithReduxSaga from "./redux-saga/UsersWithReduxSaga";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div>
              <Link to='/'>Home</Link>

              |
              <Link to='/redux-saga'>Redux-Saga</Link>

            </div>
            <Switch>

              <Route path="/redux-saga" component={UsersWithReduxSaga} />

              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;