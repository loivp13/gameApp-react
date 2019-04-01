import React, { Component } from "react";
import InputUtility from "../UtilitiesComponents/InputUtility";
import SignUp from "./SignUp";

export class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 About-Us mt-5">
            <div className="about-us1">
              Want to buy, sell, trade games anywhere in the world?
            </div>
            <div className="about-us2">
              Do it with us! We'll handle nuances!
            </div>
            <img
              className="landing_page_img ml-0"
              src="https://images-na.ssl-images-amazon.com/images/I/71MTFk033HL._SL1500_.jpg"
              alt=""
            />
            <span className="img-filler" />
          </div>
          <div className="col-4 mt-5">
            <SignUp className="" />
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
