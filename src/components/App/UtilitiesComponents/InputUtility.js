import React from "react";
import { InputGroup, Button, InputGroupAddon, Input } from "reactstrap";
import API_KEY from "../apiKeys/apiKeys";
import axios from "axios";
import { searchTerm } from "../redux/actions";
import { connect } from "react-redux";
import { Types } from "../redux/actions/Types";

class InputUtility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleSearchClick = term => {
    let ageRating = [];
    axios({
      url: process.env.API_URL === "dev" ? "/games" : "https://api-v3.igdb.com",
      method: "POST",
      headers: {
        ["user-key"]: API_KEY.igdb
      },
      data: `search "${term}"; limit 50; fields name, genres.name, platforms.abbreviation, popularity, rating, rating_count, cover.url, similar_games.name ;`
    })
      .then(response => {
        this.props.searchTerm(Types.SearchTerm, response.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
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

export default connect(
  null,
  { searchTerm }
)(InputUtility);
