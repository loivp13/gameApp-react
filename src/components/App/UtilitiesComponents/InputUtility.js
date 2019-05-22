import React from "react";
import { InputGroup, Button, InputGroupAddon, Input } from "reactstrap";
import API_KEY from "../apiKeys/apiKeys";
import axios from "axios";

class InputUtility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleSearchClick = term => {
    axios({
      url:
        process.env.API_URL === "dev" ? "/search" : "https://api-v3.igdb.com",
      method: "POST",
      headers: {
        ["user-key"]: API_KEY.igdb
      },
      data:
        "fields alternative_name,character,collection,company,description,game,name,person,platform,popularity,published_at,test_dummy,theme;"
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });

    axios({
      url: "/games",
      method: "POST",
      headers: {
        ["user-key"]: API_KEY.igdb
      },
      data: `fields name, involved_companies; search "Halo";`
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    console.log(process.env);
    return (
      <InputGroup className="border border-dark rounded">
        <InputGroupAddon addonType="prepend">
          <Button
            onClick={() => {
              this.handleSearchClick(this.state.searchTerm);
            }}
            className="bg-primary"
          >
            Search
          </Button>
        </InputGroupAddon>
        <Input
          onChange={e => {
            this.setState({ searchTerm: e.target.value });
          }}
          value={this.state.searchTerm}
        />
      </InputGroup>
    );
  }
}

export default InputUtility;
