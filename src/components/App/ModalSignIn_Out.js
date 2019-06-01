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

class ModalSignIn_Out extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

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
        });
    });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleSignOutClick = async () => {
    this.auth.signOut();
    await this.props.signOut();
    this.props.history.push("/");
  };
  render() {
    let renderLogin_Out = () => {
      if (this.props.buttonLabel === "Sign Out") {
        return (
          <p
            className={`pt-3 ml-1 ${
              this.props.buttonColor
            } modal_label_animation grow`}
            onClick={this.handleSignOutClick}
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
            <Form>
              <Row form>
                <Col xs={12}>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                      type="text"
                      name="user"
                      id="username"
                      placeholder=""
                    />
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="userpw"
                      id="password"
                      placeholder=""
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
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
    isSignedIn: state.auth.isSignedIn,
    authObject: state.auth.authObject
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { signIn, signOut }
  )(ModalSignIn_Out)
);
