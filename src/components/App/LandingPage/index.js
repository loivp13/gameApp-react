import React, { Component } from "react";
import InputUtility from "../UtilitiesComponents/InputUtility";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import logoBrand from "../../../img/logoBrand.jpg";

export class LandingPage extends Component {
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
  return { isSignedIn: state.auth.isSignedIn, dispatch: state.dispatch };
};

export default connect(mapStateToProps)(LandingPage);
