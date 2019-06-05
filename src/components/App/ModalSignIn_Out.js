/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { connect } from "react-redux";
import { signIn, signOut } from "./redux/actions";
import { withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

class ModalSignIn_Out extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  //loading google api for auth2
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
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      this.props.history.push("/userAccount");
    } else {
      this.props.signOut();
      this.props.history.push("/");
    }
  };

  //rendering form-redux
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <Label>{label}</Label>
        <Input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="text-danger">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  //render either log in or log out button
  render() {
    let renderLogin_Out = () => {
      if (this.props.buttonLabel === "Sign Out") {
        return (
          <p
            className={`pt-3 ml-1 ${
              this.props.buttonColor
            } modal_label_animation grow`}
            onClick={this.onSignOutClick}
          >
            {this.props.buttonLabel}
          </p>
        );
      } else {
        return (
          <p
            className={`pt-3 ml-1 ${
              this.props.buttonColor
            } modal_label_animation grow`}
            onClick={this.toggle}
          >
            {this.props.buttonLabel}
          </p>
        );
      }
    };

    return (
      <React.Fragment>
        {renderLogin_Out()}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader
            className="modal_body_color text-white"
            toggle={this.toggle}
          >
            Sign In!
          </ModalHeader>
          <ModalBody className="bg-light ">
            <form>
              <Row form>
                <Col xs={12}>
                  <FormGroup>
                    <Field
                      name="username"
                      component={this.renderInput}
                      label="Enter Your Username"
                    />
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup>
                    <Field
                      name="password"
                      component={this.renderInput}
                      label="Enter Password"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </form>
          </ModalBody>
          <ModalFooter className="bg-dark">
            <Button className="mr-5" color="primary" onClick={this.toggle}>
              Sign In
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
let mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = "You must enter a email";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};
export default withRouter(
  connect(
    mapStateToProps,
    { signIn, signOut }
  )(
    reduxForm({
      form: "signIn",
      validate
    })(ModalSignIn_Out)
  )
);
