import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalSignIn_Out from "../ModalSignIn_Out";
import { connect } from "react-redux";

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

class Header extends React.Component {
  render() {
    // localStorage.clear();

    let renderButtonLabel =
      this.props.isSignedIn || this.props.isSignedInLocal
        ? "Sign Out"
        : "Sign In";
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

          <div className="ml-auto mr-5 text-white game_deals">
            <div className="row mt-3 align-items-center ">
              <ModalSignIn_Out
                buttonLabel={renderButtonLabel}
                buttonColor="text-white"
              />
              <span className="ml-1">
                <FontAwesomeIcon
                  className="text-white"
                  icon={["fas", "user-circle"]}
                />
              </span>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}
let mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isSignedInLocal: state.localAuth.isSignedInLocal
  };
};

export default connect(mapStateToProps)(Header);
