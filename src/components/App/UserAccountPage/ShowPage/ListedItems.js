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
import { withRouter } from "react-router-dom";
import { RemoveFromListed } from "../../redux/actions";

export class WishList extends Component {
  handleTrashClick = (data, index) => {
    console.log(this.props);
    if (this.props.userIdLocal) {
      this.props.RemoveFromListed(data, index);
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    const browseColumnStyle = () => {
      return this.props.collapse
        ? "col-10 col-sm-5 col-md-4 col-lg-3 mb-2"
        : "col-10 col-sm-5 col-md-4 col-lg-2 mb-2";
    };
    const renderCards = () => {
      let { listedItems } = this.props;

      return listedItems.length > 0 ? (
        listedItems.map((data, index) => {
          let checkForCoverArt = () => {
            if (data.cover) {
              return data.cover.url.replace(/thumb/, "cover_big");
            } else {
              return "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fuh.edu%2Fpharmacy%2F_images%2Fdirectory-staff%2Fno-image-available.jpg&f=1";
            }
          };
          return (
            <div key={index} className={browseColumnStyle()}>
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
                      ${(+data.sellingPrice).toFixed(2)}
                    </div>
                    <hr className="browse_hr_dark" />
                    <div
                      onClick={() => {
                        this.handleTrashClick(data, index);
                      }}
                      className="col-6 browse_fonticon_hovertransform align-self-end"
                      color="primary"
                    >
                      <FontAwesomeIcon
                        className="text-danger "
                        icon={["fas", "trash"]}
                      />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })
      ) : (
        <div className="align-items-center mb-5">Nothing is listed!</div>
      );
    };
    return (
      <div>
        <div id="browse_container" className="row rounded border border-dark">
          <div className="col-6 w-100" />

          <div className="col-12">
            <div className="h4 p-2">Listed Items</div>
            <hr />
            <div className="row">{renderCards()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    userIdLocal: state.localAuth.userIdLocal,
    listedItems: state.listedItems
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { RemoveFromListed }
  )(WishList)
);
