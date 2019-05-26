import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { searchTerm } from "./redux/actions/index";
import { Types } from "./redux/actions/Types";
import { connect } from "react-redux";
import axios from "axios";
import API_KEY from "./apiKeys/apiKeys";

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

  componentDidMount() {
    if (!this.props.apiSearchResponse)
      axios({
        url:
          process.env.API_URL === "dev" ? "/games" : "https://api-v3.igdb.com",
        method: "POST",
        headers: {
          ["user-key"]: API_KEY.igdb
        },
        data: `limit 50; fields name, genres.name, platforms.abbreviation, popularity, rating, rating_count, cover.url, similar_games.* ;`
      })
        .then(response => {
          this.props.searchTerm(Types.SearchTerm, response.data);
        })
        .catch(err => {
          console.error(err);
        });
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
