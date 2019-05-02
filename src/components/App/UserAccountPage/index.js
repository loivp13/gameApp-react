import React, { Component } from "react";
import axios from "axios";
import { igdbKeys as API_KEY } from "../apiKeys/apiKeys";
import BasicCollapse from "../BasicCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export class UserAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null || "realUsername",
      collapse: true
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    console.log("hi");

    axios({
      url: "https://api-v3.igdb.com/characters",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": API_KEY
      },
      data:
        "fields akas,country_name,created_at,description,games,gender,mug_shot,name,people,slug,species,updated_at,url;"
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const openIcon = () => {
      return (
        <div className="btn btn-success">
          <FontAwesomeIcon icon={["fas", "expand-arrows-alt"]} />
        </div>
      );
    };

    //if true take up more space else less space
    const BasicCollapseStyle = this.state.collapse
      ? "col-12 col-md-6"
      : "col-12 col-md-2";
    const ShowStyle = this.state.collapse ? "col-6" : "col-10";
    return (
      <div>
        <div className="row">
          <div className={BasicCollapseStyle}>
            <BasicCollapse
              username={this.state.username}
              buttonIcon={openIcon}
              onToggle={this.toggle}
              collapse={this.state.collapse}
            />
          </div>
          <div className={ShowStyle}>Show</div>
        </div>
      </div>
    );
  }
}

export default UserAccount;
