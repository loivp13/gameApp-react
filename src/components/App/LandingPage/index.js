import React, { Component } from "react";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { ResolveErrorMessage } from "../redux/actions";
import logoBrand from "../../../img/logoBrand.jpg";
import { withRouter } from "react-router-dom";

export class LandingPage extends Component {
  componentWillMount() {
    this.props.ResolveErrorMessage();

    if (this.props.isSignedIn || this.props.isSignedInLocal) {
      this.props.history.push("/userAccount");
    }
  }
  render() {
    return (
      <div className="container" id="landingPageContainer">
        <div className="row">
          <div className="col-12 col-md-7 mt-5" id="aboutUs">
            <div className="row">
              <div className="col about-us1 ">
                Want to buy, sell, and trade games anywhere in the world?
              </div>
            </div>
            <div className="row">
              <div className="col about-us2">
                Do it with us! We'll handle nuances!
              </div>
            </div>

            <div className="row ">
              <div className="col-12 mt-4 landing_page_crop">
                <img className="landing_page_img" src={logoBrand} />
              </div>
            </div>
          </div>
          <div
            id="landingPageForm"
            className="col-12 col-md-4 mt-sm-1 mb-sm-5 mt-md-3 "
          >
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isSignedInLocal: state.localAuth.isSignedInLocal,
    errorMessages: state.errorMessages
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { ResolveErrorMessage }
  )(LandingPage)
);
