import React, { Component } from "react";
import { Link } from "react-router-dom";

export class UserMenuItems extends Component {
  render() {
    return <Link to=''>{this.props.link}</Link>;
  }
}

export default UserMenuItems;
