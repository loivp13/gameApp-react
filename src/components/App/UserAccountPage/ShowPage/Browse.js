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
  CardFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addToWishList,
  addToCart,
  handleFilterAlphaDown,
  handleFilterAlphaUp,
  handleFilterPriceDown,
  handleFilterPriceUp
} from "../../redux/actions";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import Pagination from "../Pagination";

export class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlistStorage: JSON.parse(localStorage.getItem("wishlist")) || [],
      pagination: 0,
      dropdownOpen: false
    };
  }

  componentWillMount() {
    // localStorage.clear();
  }

  handleCartClick = data => {
    if (this.props.userIdLocal) {
      this.props.addToCart(data);
    } else {
      this.props.history.push("/");
    }
  };
  handleWishlistClick = data => {
    this.state.wishlistStorage.push(data);
    if (this.props.userIdLocal) {
      localStorage.setItem(
        "wishlist",
        JSON.stringify(this.state.wishlistStorage)
      );
    } else {
      this.props.history.push("/");
    }
  };
  handlePageClick = page => {
    this.setState({ pagination: page });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  handleFilterAlphaDown = () => {
    this.props.handleFilterAlphaDown();
  };
  handleFilterAlphaUp = () => {
    this.props.handleFilterAlphaUp();
  };
  handleFilterPriceDown = () => {
    this.props.handleFilterPriceDown();
  };
  handleFilterPriceUp = () => {
    this.props.handleFilterPriceUp();
  };
  render() {
    const browseColumnStyle = () => {
      return this.props.collapse
        ? "col-10 col-sm-5 col-md-4 col-lg-3 mb-2"
        : "col-10 col-sm-5 col-md-4 col-lg-2 mb-2";
    };
    const renderCards = () => {
      let apiSearchResponse = _.chunk(this.props.apiSearchResponse, 8);
      return apiSearchResponse.length > 0
        ? apiSearchResponse[this.state.pagination].map(data => {
            data.basePrice = parseFloat(
              ((data.popularity / 20) * 60).toFixed(2)
            );
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
                      <div className=" col-12 mb-2 text-center border-bottom border-dark">
                        ${(+data.basePrice).toFixed(2)}
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
        <div id="browse_container" className="row rounded border border-dark ">
          <div className="row col-12 align-items-center my-4">
            <div className="col-6">
              <InputUtility />
            </div>
            <div className="col-1">
              <Dropdown
                direction="right"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret>Filters</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={this.handleFilterAlphaDown}
                    className=""
                  >
                    <div className="">
                      <FontAwesomeIcon
                        className="text-primary mr-4 "
                        icon={["fas", "sort-alpha-down"]}
                      />{" "}
                      Alphabetize in order
                    </div>
                  </DropdownItem>
                  <DropdownItem onClick={this.handleFilterAlphaUp} className="">
                    <div className="">
                      <FontAwesomeIcon
                        className="text-primary mr-4 "
                        icon={["fas", "sort-alpha-up"]}
                      />
                      Alphabetize in reverse
                    </div>
                  </DropdownItem>
                  <DropdownItem
                    onClick={this.handleFilterPriceDown}
                    className=""
                  >
                    <div className="">
                      <FontAwesomeIcon
                        className="text-primary mr-4 "
                        icon={["fas", "sort-numeric-down"]}
                      />{" "}
                      Pricing Low to High
                    </div>
                  </DropdownItem>
                  <DropdownItem onClick={this.handleFilterPriceUp} className="">
                    <div className="">
                      <FontAwesomeIcon
                        className="text-primary mr-4 "
                        icon={["fas", "sort-numeric-up"]}
                      />{" "}
                      Pricing High to Low
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              {/* <div className={browseColumnStyle()} /> */}
              {renderCards()}
            </div>
          </div>
          <div className="col-4 m-auto">
            <Pagination
              pages={_.chunk(this.props.apiSearchResponse, 8)}
              handlePageClick={this.handlePageClick}
            />
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
    {
      addToWishList,
      addToCart,
      handleFilterAlphaUp,
      handleFilterAlphaDown,
      handleFilterPriceUp,
      handleFilterPriceDown
    }
  )(Browse)
);
