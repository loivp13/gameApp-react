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
    this.props.searchTerm(term);
  };

  render() {
    return (
      <InputGroup
        onSubmit={() => {
          this.handleSearchClick(term);
        }}
        onBlur={() => {
          this.handleSearchClick(this.state.searchTerm);
        }}
        className="border border-dark rounded"
      >
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
          onKeyDown={e => {
            if (e.keyCode === 13) {
              this.handleSearchClick(this.state.searchTerm);
            }
          }}
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
