import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import WrongUrl from "./WrongUrl";
import Login from "./Login";
const history = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Navbar />
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
