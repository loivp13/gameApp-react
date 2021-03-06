import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { connect } from "react-redux";
import { selectShowPage } from "../redux/actions";

export class UserMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSrc:
        "https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
    };

    this.handleSelect = page => {
      this.props.selectShowPage(page);
    };
  }

  render() {
    return (
      <div className="pt-2 pl-2">
        <div className="row align-items-center">
          <div className="col-6" id="">
            <img
              src={this.state.imageSrc}
              className="img-thumbnail border-0"
              alt=""
            />
          </div>

          <div className="col-6" id="">
            <div className="row justify-items-center">
              <div className="col text-center">
                Welcome {this.props.username}{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="list-group border-dark">
            <ButtonGroup vertical>
              <Button
                size="lg"
                color="primary"
                onClick={() => {
                  this.handleSelect("Browse");
                }}
                outline
              >
                Browse
              </Button>
              <Button
                size="lg"
                color="primary"
                onClick={() => {
                  this.handleSelect("Cart");
                }}
                outline
              >
                Cart
              </Button>
              <Button
                size="lg"
                color="primary"
                onClick={() => {
                  this.handleSelect("Sell");
                }}
                outline
              >
                Sell
              </Button>
              <Button
                size="lg"
                color="primary"
                onClick={() => {
                  this.handleSelect("WishList");
                }}
                outline
              >
                WishList
              </Button>
              <Button
                size="lg"
                color="primary"
                onClick={() => {
                  this.handleSelect("Listed Items");
                }}
                outline
              >
                Listed Items
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    username: state.localAuth.userIdLocal
  };
};

export default connect(
  mapStateToProps,
  { selectShowPage }
)(UserMenu);
