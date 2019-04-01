import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Login from "./Login";
import UserAccountPage from "./UserAccountPage";

const history = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <div className="container AppBody">
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/userAccount" component={UserAccountPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
