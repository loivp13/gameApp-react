import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <Link to="login">Navbar</Link>
      </div>
    );
  }
}

export default Navbar;
