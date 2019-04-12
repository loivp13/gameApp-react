import React, { Component } from "react";
import UserMenuItem from "./UserMenuItems";

export class UserMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSrc:
        "https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
    };
  }

  render() {
    return (
      <div className="pt-2 pl-2">
        <div className="row align-items-center">
          <div className="col-4" id="">
            <img
              src={this.state.imageSrc}
              className="img-thumbnail border-0"
              alt=""
            />
          </div>

          <div className="col-4" id="">
            <div className="row justify-items-center">
              <div className="col text-center">Welcome User</div>
              {this.props.username}
            </div>
          </div>

          <div className="col-4 text-center" id="">
            Sold!
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="list-group border-dark">
            <div className="list-group-item-actions">
              <UserMenuItem link={"Browse"} />
            </div>
            <div className="list-group-item-actions">
              <UserMenuItem link={"Sell"} />
            </div>
            <div className="list-group-item-actions">
              <UserMenuItem link={"Wish List"} />
            </div>
            <div className="list-group-item-actions">
              <UserMenuItem link={"Setting"} />
            </div>
            <div className="list-group-item-actions">
              <UserMenuItem link={"Trade"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserMenu;
