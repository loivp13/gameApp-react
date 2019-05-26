import React, { Component } from "react";
import InputUtility from "../../UtilitiesComponents/InputUtility";
import { connect } from "react-redux";
import {
  Card,
  Button,
  CardImg,
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

export class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                return data.cover.url;
              } else {
                return "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fuh.edu%2Fpharmacy%2F_images%2Fdirectory-staff%2Fno-image-available.jpg&f=1";
              }
            };
            return (
              <div
                key={data.id}
                className={`${browseColumnStyle()} text-center border rounded border-dark pt-3 bg-light mr-1 ml-4 mt-1`}
              >
                <Card>
                  <CardImg top width="100%" src={checkForCoverArt()} />
                  <CardHeader>{data.name}</CardHeader>
                  <CardFooter>
                    <div className="row">
                      <a className="col-4" color="danger">
                        <FontAwesomeIcon
                          className="text-danger"
                          icon={["fas", "heart"]}
                        />
                      </a>

                      <a className="col-" color="primary">
                        <FontAwesomeIcon
                          className="text-primary"
                          icon={["fas", "cart-plus"]}
                        />
                      </a>
                      <div className="browse_price ml-2">
                        {((data.popularity / 20) * 60).toFixed(2)}
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
        <div id="browse_container" className="row  rounded border border-dark">
          <div className="col-6 w-100 my-4">
            <InputUtility />
          </div>

          <div className="col-12">
            <div className="row justify-content-start">{renderCards()}</div>
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
export default connect(mapStateToProps)(Browse);
