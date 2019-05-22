import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:
        "https://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      title: "Game title",
      price: 34,
      quanity: 1
    };
  }
  render() {
    const renderCart = () => {
      return (
        <div className="row">
          <div className="col-12">
            <div className="h4 mb-4">Shopping Cart</div>
            <div className="row border border-grey align-items-center rounded p-1">
              <div className="col-3 ">
                <img
                  className="shopping_cart_image"
                  src={this.state.image}
                  alt=""
                />
              </div>
              <div className="col-3 shopping_cart_title">
                <div className="row">
                  <div className="">{this.state.title}</div>
                </div>
              </div>
              <div className="col-3 shopping_cart_price">
                <div className="row">
                  <div className="col-12 text-center">${this.state.price}</div>
                </div>
              </div>
              <div className="col-3 shopping_cart_quantity">
                <select type="select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        {renderCart()}
        <hr className="hr-black" />
        <div className="h4 total mt-5">
          <div className="subtotal-text mr-3">Subtotal:</div>
          <span className="mr-3">
            <strong>0 item</strong>
          </span>
          $00.00
        </div>
      </div>
    );
  }
}
export default Cart;
