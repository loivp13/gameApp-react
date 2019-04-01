import React, { Component } from "react";
import axios from "axios";
import { igdbKeys as API_KEY } from "../apiKeys/apiKeys";

export class UserAccount extends Component {
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

  render() {
    return <div>User's Account</div>;
  }
}

export default UserAccount;
