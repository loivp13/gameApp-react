import React, { Component } from "react";
import BasicCollapse from "../BasicCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { selectShowPage, searchTerm } from "../redux/actions";
import Browse from "./ShowPage/Browse";
import Sell from "./ShowPage/Sell";
import WishList from "./ShowPage/WishList";
import Trade from "./ShowPage/Trade";
import Setting from "./ShowPage/Setting";
import Cart from "./ShowPage/Cart";

export class UserAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    if (this.props.apiSearchResponse.length === 0) {
      console.log("mounted search");
      this.props.searchTerm("smash");
    }
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const openIcon = () => {
      return (
        <div className="btn">
          <FontAwesomeIcon icon={["fas", "expand-arrows-alt"]} />
        </div>
      );
    };

    const renderCurrentPage = () => {
      switch (this.props.currentPage) {
        case "Browse":
          return <Browse collapse={this.state.collapse} />;
        case "Sell":
          return <Sell />;
        case "Wish List":
          return <WishList collapse={this.state.collapse} />;
        case "Trade":
          return <Trade />;
        case "Setting":
          return <Setting />;
        case "Cart":
          return <Cart collapse={this.state.collapse} />;
        default:
          return null;
      }
    };

    //if true take up more space else less space
    const BasicCollapseStyle = this.state.collapse
      ? "col-12 col-md-4 "
      : "col-3 col-md-2";
    const ShowStyle = this.state.collapse
      ? "col-10 col-md-7 "
      : "col-10 col-lg-10";
    return (
      <div className="main_container">
        <div className="row justify-content-around">
          <div id="basicCollapse" className={BasicCollapseStyle}>
            <BasicCollapse
              username={this.state.username}
              buttonIcon={openIcon}
              onToggle={this.toggle}
              collapse={this.state.collapse}
            />
          </div>
          <div className={ShowStyle}>{renderCurrentPage()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.currentShowPage.currentPage,
    apiSearchResponse: state.apiSearchResponse
  };
};

export default connect(
  mapStateToProps,
  { selectShowPage, searchTerm }
)(UserAccount);
