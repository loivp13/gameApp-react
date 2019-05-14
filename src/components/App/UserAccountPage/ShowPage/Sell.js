import React, { Component } from "react";
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

export class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };
  }

  componentDidMount() {
    this.setState({ location: "springfiled" });
  }

  render() {
    return (
      <div className="container col-8 mt-5 bg-secondary p-4 rounded">
        <Form id="signUpForm">
          <div className="row align-items-center m-auto pb-2">
            <div className="h4 mr-auto">Trade in your games!</div>
          </div>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="price">Selling price</Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="price "
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="location">Area</Label>
            <Input
              type="text"
              name="location"
              id="location"
              value={this.state.location}
            />
          </FormGroup>
          <div>
            <Button className="btn btn-success"> Trade!</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Sell;
