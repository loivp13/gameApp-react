import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalSignUp from "../ModalSignUp";
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

export default class SignUp extends React.Component {
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
      <Form id="signUpForm">
        <div className="row align-items-center m-auto pb-2">
          <div className="h4 mr-auto">Sign up!</div>
          <div className="h5">Sign in with</div>
          <ModalSignUp buttonLabel={modal()} />
        </div>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password "
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input
            type="text"
            name="address"
            id="exampleName"
            placeholder="First Name and Last Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address</Label>
          <Input
            type="text"
            name="address"
            id="exampleAddress"
            placeholder="Apartment, studio, or floor"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip" />
            </FormGroup>
          </Col>
        </Row>
        <div>
          <Button className="btn btn-danger"> Sign Up</Button>
          <div className="row">
            <p className="pt-3">Already have an account?</p>
            <ModalSignUp className="pt-3" buttonLabel="SignIn" />
          </div>
        </div>
      </Form>
    );
  }
}
