import React, { Component } from "react";
import InputUtility from "../../UtilitiesComponents/InputUtility";
import { connect } from "react-redux";
import {
  Card,
  Button,
  CardImg,
  CardDeck,
  CardColumns,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  ButtonGroup,
  CardHeader,
  CardFooter
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToWishList } from "../../redux/actions";
import { withRouter } from "react-router-dom";

export class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // localStorage.clear();
    this.cartStorage = JSON.parse(localStorage.getItem("cart")) || [];
    this.wishlistStorage = JSON.parse(localStorage.getItem("wishlist")) || [];
  }

  handleCartClick = data => {
    this.cartStorage.push(data);
    console.log(this.cartStorage);
    if (this.props.userIdLocal) {
      localStorage.setItem("cart", JSON.stringify(this.cartStorage));
    } else {
      this.props.history.push("/");
    }
  };
  handleWishlistClick = data => {
    this.wishlistStorage.push(data);
    if (this.props.userIdLocal) {
      localStorage.setItem("wishlist", JSON.stringify(this.wishlistStorage));
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    const browseColumnStyle = () => {
      return this.props.collapse
        ? "col-10 col-sm-5 col-md-3 col-lg-3 mb-2"
        : "col-10 col-sm-5 col-md-4 col-lg-2 mb-2";
    };
    const renderCards = () => {
      let { apiSearchResponse } = this.props;
      return apiSearchResponse
        ? apiSearchResponse.map(data => {
            let checkForCoverArt = () => {
              if (data.cover) {
                return data.cover.url.replace(/thumb/, "cover_big");
              } else {
                return "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fuh.edu%2Fpharmacy%2F_images%2Fdirectory-staff%2Fno-image-available.jpg&f=1";
              }
            };
            return (
              <div key={data.id} className={browseColumnStyle()}>
                <Card className="h-100 ">
                  <CardImg
                    className="browse_img_size"
                    top
                    width="100%"
                    src={checkForCoverArt()}
                  />
                  <CardBody>
                    <div>{data.name}</div>
                  </CardBody>
                  <CardFooter className="align-content-end">
                    <div className="row">
                      <div className=" col-8 mb-2 text-center border-bottom border-dark">
                        ${((data.popularity / 20) * 60).toFixed(2)}
                      </div>
                      <hr className="browse_hr_dark" />
                      <div
                        onClick={() => {
                          this.handleWishlistClick(data);
                        }}
                        className="col-6 browse_fonticon_hovertransform"
                        color="danger"
                      >
                        <FontAwesomeIcon
                          className="text-danger "
                          icon={["fas", "heart"]}
                        />
                      </div>
                      <div
                        onClick={() => {
                          this.handleCartClick(data);
                        }}
                        className="col-6 browse_fonticon_hovertransform"
                        color="primary"
                      >
                        <FontAwesomeIcon
                          className="text-primary "
                          icon={["fas", "cart-plus"]}
                        />
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            );
          })
        : null;
    };
    return (
      <div>
        <div id="browse_container" className="row rounded border border-dark">
          <div className="col-6 w-100 my-4">
            <InputUtility />
          </div>

          <div className="col-12">
            <div className="row">
              {/* <div className={browseColumnStyle()} /> */}
              {renderCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    apiSearchResponse: state.apiSearchResponse,
    userId: state.auth.userId,
    userIdLocal: state.localAuth.userIdLocal
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { addToWishList }
  )(Browse)
);
