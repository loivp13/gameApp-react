import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalSignIn from "../ModalSignIn_Out";
import GoogleAuth from "../GoogleAuth";
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
import { signUpLocal, signOutLocal } from "../redux/actions";

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
    console.log(this.props);
    this.props.signUpLocal(formValues);
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
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)} id="signUpForm">
        <div className="row align-items-center m-auto pb-2">
          <div className="h4 mr-auto">Sign up!</div>
          <div className="h5">Sign in with</div>
          <GoogleAuth />
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
        <div>
          <Button className="btn btn-danger grow"> Sign Up</Button>
          <div className="row">
            <p className="pt-3 ml-3">Already have an account?</p>
            <ModalSignIn
              className="pt-3"
              buttonLabel="SignIn"
              buttonColor="text-danger"
            />
          </div>
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

export default connect(
  null,
  {
    signUpLocal
  }
)(
  reduxForm({
    form: "SignUp",
    validate
  })(SignUp)
);
