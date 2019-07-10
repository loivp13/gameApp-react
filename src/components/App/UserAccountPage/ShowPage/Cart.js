import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "./CartComponents/CartItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeFromCart, addToCart, placeOrder } from "../../redux/actions";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordered: false
    };
  }
  componentWillUnmount() {
    this.setState({ ordered: false });
  }
  handlePlusClick = data => {
    this.props.addToCart(data);
  };
  handleOrderClick = () => {
    this.props.placeOrder();
    this.setState({ ordered: true });
  };
  render() {
    const renderCart = () => {
      return this.props.cart.items.length > 0 ? (
        this.props.cart.items.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={item}
              index={index}
              handlePlusClick={this.handlePlusClick}
            />
          );
        })
      ) : this.state.ordered ? (
        <div>Order has been placed! Thank you for using GameDeals!</div>
      ) : (
        <div className="">Nothing in cart! Go browse for something!</div>
      );
    };

    return (
      <div>
        <div className="h4 mb-4">Shopping Cart</div>

        {renderCart()}
        <hr className="hr-black" />
        <div className="h4 total mt-5 mr-5 float-right">
          <div className="subtotal-text mr-3">Subtotal:</div>
          <span className="mr-3">
            <strong>{this.props.cart.quantity}</strong>
          </span>
          ${this.props.cart.subtotal.toFixed(2)}
          <div className=" mr-5 mt-1">
            <button onClick={this.handleOrderClick} className="btn btn-primary">
              Place order
            </button>
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state, ownProps) => {
  return {
    userIdLocal: state.localAuth.userIdLocal,
    cart: state.cart
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { removeFromCart, addToCart, placeOrder }
  )(Cart)
);
