import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" className="mb-4">
          <NavbarBrand href="/" id="navbarBrand" className="ml-5">
            <div id="navBrand_Game" className="text-white">
              Game
            </div>
            <div id="navBrand_App" className="text-white">
              Deals
            </div>
          </NavbarBrand>

          <div className="ml-auto mr-5 text-dark game_deals d-md-none">
            Account
            <span className="ml-1">
              <FontAwesomeIcon
                className="text-dark"
                icon={["fas", "user-circle"]}
              />
            </span>
          </div>
        </Navbar>
      </div>
    );
  }
}
