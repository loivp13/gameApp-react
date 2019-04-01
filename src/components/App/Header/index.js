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
        <Navbar color="light" light expand="md" className="">
          <NavbarBrand href="/" id="navbarBrand" className="ml-5">
            <div id="navBrand_Game" className="text-white">
              Game
            </div>
            <div id="navBrand_App" className="text-white">
              Deals
            </div>
          </NavbarBrand>

          <div className="ml-auto mr-5 text-black game_deals">
            Account
            <span className="ml-1">
              <FontAwesomeIcon
                className="text-black"
                icon={["fas", "user-circle"]}
              />
            </span>
          </div>
        </Navbar>
      </div>
    );
  }
}
