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
import { signIn, signOut, signOutLocal, signInLocal } from "./redux/actions";
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
  componentWillMount() {
    if (!this.props.isSignedInLocal) {
      this.props.history.push("/");
    }
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onSignInClick = formValue => {
    this.props.signInLocal(formValue, this.props.history, this.toggle);
  };

  onSignOutClick = () => {
    if (this.props.isSignedIn) {
      return this.auth.SignOut();
    } else {
      this.props.signOutLocal();
      this.props.history.push("/");
      return;
    }
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
          <form onSubmit={this.props.handleSubmit(this.onSignInClick)}>
            <ModalBody className="bg-light ">
              <Row>
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
            </ModalBody>
            <ModalFooter className="bg-dark">
              <Button className="mr-5" color="primary">
                Sign In
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}
let mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isSignedInLocal: state.localAuth.isSignedInLocal
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
    { signIn, signOut, signOutLocal, signInLocal }
  )(
    reduxForm({
      form: "signIn",
      validate
    })(ModalSignIn_Out)
  )
);
