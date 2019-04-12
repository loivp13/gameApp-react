import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Footer extends Component {
  render() {
    return (
      <div className="row justify-content-center mb-5 " id="footer">
        <div className="col-1">
          <Link to="/linkedin">
            <FontAwesomeIcon
              className="text-white"
              icon={["fab", "linkedin"]}
              size="lg"
            />
          </Link>
        </div>
        <div className="col-1">
          <Link to="/github">
            <FontAwesomeIcon
              className="text-white"
              icon={["fab", "git-square"]}
              size="lg"
            />
          </Link>
        </div>
        <div className="col-1">
          <Link to="/facebook">
            <FontAwesomeIcon
              className="text-white"
              icon={["fab", "facebook"]}
              size="lg"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
