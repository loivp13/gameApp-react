import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { persistStore } from "redux-persist";
import { connect } from "react-redux";
import { PURGE } from "redux-persist";
import history from "../../../history";

export class Footer extends Component {
  purgeState = e => {
    e.preventDefault();
    this.props.dispatch({
      type: PURGE,
      key: "root",
      result: () => {}
    });
  };

  render() {
    let renderPurgeButton = () => {
      process.env.API_URL === "dev" ? (
        <div className="col-1">
          <button onClick={this.purgeState} className="btn-danger">
            purge
          </button>
        </div>
      ) : (
        []
      );
    };
    return (
      <div className="row justify-content-center mb-5 " id="footer">
        <div className="col-1">
          <Link to="/linkedin">
            <FontAwesomeIcon
              className="text-white grow"
              icon={["fab", "linkedin"]}
              size="lg"
            />
          </Link>
        </div>
        <div className="col-1">
          <Link to="/github">
            <FontAwesomeIcon
              className="text-white grow"
              icon={["fab", "git-square"]}
              size="lg"
            />
          </Link>
        </div>
        <div className="col-1">
          <Link to="/codesandbox">
            <FontAwesomeIcon
              className="text-white grow"
              icon={["fab", "codepen"]}
              size="lg"
            />
          </Link>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state, ownProps) => {
  return { isSignedIn: state.auth.isSignedIn, dispatch: state.dispatch };
};
export default connect(mapStateToProps)(Footer);
