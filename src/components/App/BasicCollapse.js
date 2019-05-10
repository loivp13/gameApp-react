import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserMenu from "./UserAccountPage/UserMenu";

class BasicCollapse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const floatDirection = this.props.collapse ? "d-none" : "float-right";

    const style = {
      position: "absolute"
    };
    return (
      <div>
        <Button
          className={floatDirection}
          color="white"
          onClick={this.props.onToggle}
          style={{ style }}
        >
          {this.props.buttonIcon()}
        </Button>
        <Collapse isOpen={this.props.collapse}>
          <div className="row bg-primary rounded">
            <div className="col-12">
              <Button
                className="float-right"
                onClick={this.props.onToggle}
                color="primary"
              >
                <FontAwesomeIcon icon={["far", "times-circle"]} />
              </Button>
            </div>
            <div className="col-10 pr-0">
              <Card onToggle={this.props.onToggle}>
                <UserMenu onToggle={this.props.onToggle} />
              </Card>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default BasicCollapse;
