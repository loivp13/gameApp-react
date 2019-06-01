import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "930973140367-ieggpaaj8to15jgors4jt43vqvmd9e18.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      this.props.history.push("/userAccount");
    } else {
      this.props.signOut();
      this.props.history.push("/");
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="btn btn-danger">
          Sign Out
        </button>
      );
    } else {
      return (
        <FontAwesomeIcon
          onClick={this.onSignInClick}
          className="text-danger ml-1 mb-1"
          icon={["fab", "google"]}
          size="2x"
        />
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default withRouter(
  connect(
    mapStateToProps,
    { signIn, signOut }
  )(GoogleAuth)
);
