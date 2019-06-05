import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { searchTerm } from "./redux/actions/index";
import { Types } from "./redux/actions/Types";
import { connect } from "react-redux";

import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Login from "./Login";
import UserAccountPage from "./UserAccountPage";

const history = createBrowserHistory();

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container AppBody">
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/userAccount" component={UserAccountPage} />
            <Route
              path="/github"
              component={() => {
                window.location = "https://github.com/loivp13";
                return null;
              }}
            />
            <Route
              path="/linked"
              component={() => {
                window.location =
                  "https://plus.google.com/u/0/115757859937195814229";
                return null;
              }}
            />
            <Route
              path="/facebook"
              component={() => {
                window.location = "https://www.facebook.com/loi.pham.12";
                return null;
              }}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    apiSearchResponse: state.apiSearchReponse
  };
};

export default connect(
  mapStateToProps,
  { searchTerm }
)(App);
