import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Button,
  CardImg,
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

export class WishList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderCards = () => {
      let { apiSearchResponse } = this.props;
      return apiSearchResponse
        ? apiSearchResponse.map(data => {
            const browseColumnStyle = () => {
              return this.props.collapse
                ? "col-10 col-sm-5 col-md-3 col-lg-3"
                : "col-10 col-sm-5 col-md-4 col-lg-2";
            };
            console.log(data);
            let checkForCoverArt = () => {
              if (data.cover) {
                return data.cover.url.replace(/thumb/, "cover_big");
              } else {
                return "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fuh.edu%2Fpharmacy%2F_images%2Fdirectory-staff%2Fno-image-available.jpg&f=1";
              }
            };
            return (
              <Card>
                <CardImg
                  top
                  width="100%"
                  height="30%"
                  src={checkForCoverArt()}
                />
                <CardBody>
                  <CardHeader>{data.name}</CardHeader>
                </CardBody>
                <CardFooter>
                  <div className="row no-gutters">
                    <a className="col-1 mr-3" color="danger">
                      <FontAwesomeIcon
                        className="text-danger"
                        icon={["fas", "heart"]}
                      />
                    </a>
                    <a className="col-1 mr-4" color="primary">
                      <FontAwesomeIcon
                        className="text-primary"
                        icon={["fas", "cart-plus"]}
                      />
                    </a>
                    <div className="browse_price col-5">
                      {((data.popularity / 20) * 60).toFixed(2)}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })
        : null;
    };
    return (
      <div>
        <div id="browse_container" className="row rounded border border-dark">
          <div className="col-12">
            <CardColumns>{renderCards()}</CardColumns>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    apiSearchResponse: state.apiSearchResponse
  };
};
export default connect(mapStateToProps)(WishList);
