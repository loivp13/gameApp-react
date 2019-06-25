import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  removeFromCart,
  addToCart,
  removeAllFromCart
} from "../../../redux/actions";
import { withRouter } from "react-router-dom";
class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  handleMinusClick = (data, index) => {
    this.props.removeFromCart(data, index);
  };

  clickDelete = (data, index) => {
    this.props.removeAllFromCart(data, index);
  };

  render() {
    let checkForCoverArt = () => {
      if (this.props.item.cover) {
        return this.props.item.cover.url.replace(/thumb/, "cover_big");
      } else {
        return "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fuh.edu%2Fpharmacy%2F_images%2Fdirectory-staff%2Fno-image-available.jpg&f=1";
      }
    };

    return (
      <div className="row">
        <div className="col-12">
          <div className="row border border-grey align-items-center rounded p-1">
            <div className="col-2 ">
              <img
                className="shopping_cart_image"
                src={checkForCoverArt()}
                alt=""
              />
            </div>
            <div className="col-2 shopping_cart_title">
              <div className="row">
                <div className="">{this.props.item.name}</div>
              </div>
            </div>
            <div className="col-2 shopping_cart_price">
              <div className="row">
                <div className="col-12 text-center">
                  {this.props.item.basePrice}
                </div>
              </div>
            </div>
            <div className="col-2 shopping_cart_quantity">
              <div className="row align-items-center">
                <div className="col-3 ">
                  <div className="">{this.props.item.quantity}</div>
                </div>
                <div className="col-3">
                  <FontAwesomeIcon
                    onClick={() => {
                      this.props.handlePlusClick(this.props.item);
                    }}
                    className="text-primary"
                    icon={["fas", "plus"]}
                  />
                  <FontAwesomeIcon
                    onClick={() => {
                      this.handleMinusClick(this.props.item, this.props.index);
                    }}
                    className="text-danger"
                    icon={["fas", "minus"]}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                this.clickDelete(this.props.item, this.props.index);
              }}
              className="col-1 browse_fonticon_hovertransform ml-auto "
              color="primary"
            >
              <FontAwesomeIcon
                className="text-primary "
                icon={["fas", "trash"]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state, ownProps) => {
  return {
    userIdLocal: state.localAuth.userIdLocal
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { removeFromCart, addToCart, removeAllFromCart }
  )(CartItem)
);
