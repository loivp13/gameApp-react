import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalSignIn from "../ModalSignIn_Out";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signUpLocal, signOutLocal, handleGuestSignin } from "../redux/actions";
import { withRouter } from "react-router-dom";

export class SignUp extends React.Component {
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

  onSubmit = formValues => {
    this.props.signUpLocal(formValues, this.props.history);
  };

  handleGuestSignin = () => {
    this.props.handleGuestSignin();
    this.props.history.push("userAccount");
  };

  render() {
    const modal = () => {
      return (
        <FontAwesomeIcon
          className="text-danger ml-1 mb-1"
          icon={["fab", "google"]}
          size="2x"
        />
      );
    };

    let Message = () => {
      const { messages } = this.props.errorMessages;
      if (messages.length > 0) {
        return <div className="pl-5 text-danger">{messages}</div>;
      } else {
        return null;
      }
    };
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)} id="signUpForm">
        <div className="row align-items-center m-auto pb-2">
          <div className="h4 mr-auto ">Sign up!</div>
          {Message()}
        </div>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Field
                name="email"
                component={this.renderInput}
                label="Enter Email"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                name="password"
                component={this.renderInput}
                label="Enter password"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Field
            name="username"
            component={this.renderInput}
            label="Please Enter a Username"
          />
        </FormGroup>
        <FormGroup>
          <Field name="address" component={this.renderInput} label="Address" />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Field name="city" component={this.renderInput} label="City" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Field name="state" component={this.renderInput} label="State" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Field
                name="zipcode"
                component={this.renderInput}
                label=" Zipcode"
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="row align-items-center justify-content-center">
          <div className="col-3">
            <div
              onClick={this.props.handleSubmit(this.onSubmit)}
              className="signUp_Button text-align-center"
            >
              Sign up
            </div>
          </div>
          <div className="signUp_text_OR col-23text-center">OR</div>
          <div
            onClick={this.handleGuestSignin}
            className="col-4 signUp_text_guest"
          >
            Guest Pass
          </div>
        </div>
        <div className="row pl-3">
          <p className="pt-3 mb-0 pl-3">Already have an account?</p>
          <ModalSignIn
            className="pt-3"
            buttonLabel="SignIn"
            buttonColor="text-danger"
          />
        </div>
      </Form>
    );
  }
}
const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = "You must enter a email";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  if (!formValues.username) {
    errors.username = "You must enter a username";
  }
  if (!formValues.address) {
    errors.address = "You must enter a address";
  }
  if (!formValues.city) {
    errors.city = "You must enter a city";
  }
  if (!formValues.state) {
    errors.state = "You must enter a state";
  }
  if (!formValues.zipcode) {
    errors.zipcode = "You must enter a zipcode";
  }

  return errors;
};

let mapStateToProps = (state, ownProps) => {
  return {
    errorMessages: state.errorMessages
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      signUpLocal,
      handleGuestSignin
    }
  )(
    reduxForm({
      form: "SignUp",
      validate
    })(SignUp)
  )
);
