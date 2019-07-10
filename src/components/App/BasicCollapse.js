import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserMenu from "./UserAccountPage/UserMenu";

class BasicCollapse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const floatDirection = this.props.collapse ? "d-none" : "";

    const style = {
      position: "sticky"
    };
    return (
      <React.Fragment>
        <Button
          size="sm"
          className={`${floatDirection} `}
          color="blue"
          onClick={this.props.onToggle}
        >
          {this.props.buttonIcon()}
        </Button>
        <Collapse isOpen={this.props.collapse} className="">
          <div
            id="collapse-container"
            className="row rounded collapse-container border border-dark pb-4 posi tion-sticky"
          >
            <div className="col-12">
              <Button
                className="float-right"
                onClick={this.props.onToggle}
                color=""
              >
                <FontAwesomeIcon icon={["far", "times-circle"]} />
              </Button>
            </div>
            <div className="col-10 pr-0 pb-3">
              <Card
                id="user_menu_container"
                className="pb-3"
                onToggle={this.props.onToggle}
              >
                <UserMenu onToggle={this.props.onToggle} />
              </Card>
            </div>
          </div>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default BasicCollapse;
