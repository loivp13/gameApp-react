import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartStorage: JSON.parse(localStorage.getItem("cart")) || [],
      wishlistStorage: JSON.parse(localStorage.getItem("wishlist")) || []
    };
  }
  render() {
    const renderCart = () => {
      return this.state.cartStorage.length > 0 ? (
        this.state.cartStorage.map(item => {
          let checkForCoverArt = () => {
            if (item.cover) {
              return item.cover.url.replace(/thumb/, "cover_big");
            } else {
              return "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fuh.edu%2Fpharmacy%2F_images%2Fdirectory-staff%2Fno-image-available.jpg&f=1";
            }
          };
          return (
            <div className="row">
              <div className="col-12">
                <div className="row border border-grey align-items-center rounded p-1">
                  <div className="col-3 ">
                    <img
                      className="shopping_cart_image"
                      src={checkForCoverArt()}
                      alt=""
                    />
                  </div>
                  <div className="col-3 shopping_cart_title">
                    <div className="row">
                      <div className="">{item.name}</div>
                    </div>
                  </div>
                  <div className="col-3 shopping_cart_price">
                    <div className="row">
                      <div className="col-12 text-center">
                        ${((item.popularity / 20) * 60).toFixed(2)}
                      </div>
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
        })
      ) : (
        <div className="">Nothing in cart! Go browse for something!</div>
      );
    };

    return (
      <div>
        <div className="h4 mb-4">Shopping Cart</div>

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
