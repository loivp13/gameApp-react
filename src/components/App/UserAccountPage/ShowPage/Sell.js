import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupText,
  InputGroupAddon,
  InputGroup
} from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { searchSellTitle, addToListed } from "../../redux/actions";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTitle: "testing",
      page: 0,
      selectedGameIndex: 1,
      game: null
    };
  }

  componentDidMount() {
    this.setState({ location: "springfield" });
  }

  onSellClick = e => {
    e.preventDefault();
    if (!isNaN(+this.props.Trade.values.price) && !this.state.game) {
      return;
    } else {
      this.props.addToListed(this.state.game, this.props.Trade.values.price);
    }
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="text-white">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta, btn }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return btn ? (
      <div className={className}>
        <Label>{label}</Label>
        <InputGroup>
          <Input {...input} autoComplete="off" />
          <InputGroupAddon addonType="append">
            <InputGroupText onClick={this.searchTitle}>Search</InputGroupText>
          </InputGroupAddon>
          {this.renderError(meta)}
        </InputGroup>
      </div>
    ) : (
      <div className={className}>
        <Label>{label}</Label>
        <Input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  searchTitle = () => {
    this.props.searchSellTitle(this.props.Trade.values.title);
  };
  onEnter = e => {
    if (e.key === "Enter") {
      this.props.searchSellTitle(this.props.Trade.values.title);
    }
  };
  handleTitlePageClick = page => {
    console.log(this.state.page);
    let newPage = this.state.page + page;
    if (newPage < 0) {
      return;
    } else if (newPage > _.chunk(this.props.searchResponse, 3).length - 1) {
      return;
    } else {
      this.setState({ page: newPage });
    }
  };
  handleSelectedItemClick = (index, game) => {
    this.setState({ selectedGameIndex: index, game });
  };

  render() {
    let renderSelectText = () => {
      return this.state.game ? (
        <div className="selectedGame text-white">{this.state.game.name}</div>
      ) : (
        <div className="noSelectedGame text-white">Please select a game</div>
      );
    };
    let renderCards = () => {
      return this.props.searchResponse.length > 0 ? (
        _.chunk(this.props.searchResponse, 3)[this.state.page].map(
          (item, index) => {
            let checkForCoverArt = () => {
              if (item.cover) {
                return item.cover.url.replace(/thumb/, "cover_big");
              } else {
                return "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fuh.edu%2Fpharmacy%2F_images%2Fdirectory-staff%2Fno-image-available.jpg&f=1";
              }
            };
            let selectedStyle = () => {
              return this.state.game
                ? this.state.game.id === item.id
                  ? "rounded Sell_Img_SizeLg"
                  : "rounded-circle Sell_Img_SizeSm"
                : "rounded-circle Sell_Img_SizeSm";
            };
            return (
              <div
                key={item.id}
                onClick={() => {
                  this.handleSelectedItemClick(index, item);
                }}
                className="col-4"
              >
                <img
                  className={`${selectedStyle()}  pb-1 `}
                  src={checkForCoverArt()}
                  alt=""
                />
              </div>
            );
          }
        )
      ) : (
        <div className="ml-3 mt-5">
          No games found! Please enter a valid game.
        </div>
      );
    };

    return (
      <div className="container col-xs-9 col-md-9 Sell_Form_Border p-1 mt-3 mb-3 rounded">
        <Form
          id="Sell_Cards_Color "
          className="m-5"
          onSubmit={this.onSellClick}
        >
          <div className="row align-items-center m-auto pb-2">
            <div className="h4 mr-auto">Sell your games</div>
          </div>
          <Row form className="justify-content-center ">
            <Col md={8}>
              <FormGroup>
                <Field
                  onKeyPress={this.onEnter}
                  onBlur={this.searchTitle}
                  name="title"
                  component={this.renderInput}
                  label="Title"
                  btn
                />
              </FormGroup>
              <FormGroup>
                <Field
                  name="price"
                  component={this.renderInput}
                  label="Price"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <div className="col-12 row mt-3 justify-content-center">
              <FontAwesomeIcon
                onClick={() => {
                  this.handleTitlePageClick(-1);
                }}
                size="2x"
                className="text-white browse_fonticon_hovertransform"
                icon={["fas", "long-arrow-alt-left"]}
              />
              <div className="text-white mx-4">Select Your Game</div>
              <FontAwesomeIcon
                onClick={() => {
                  this.handleTitlePageClick(1);
                }}
                size="2x"
                className="text-white browse_fonticon_hovertransform"
                icon={["fas", "long-arrow-alt-right"]}
              />
            </div>
            <div className="row align-items-center justify-content-between mt-3">
              {renderCards()}
            </div>
            <div className="Sell_Selected_Game">{renderSelectText()}</div>
          </Row>
          <Row className="justify-content-center mt-3">
            <Button className="btn btn-success btn-lg ml-auto mr-auto">
              {" "}
              Sell!
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.price || isNaN(+formValues.price)) {
    errors.price = "You must enter a numeric price";
  }

  return errors;
};

const mapStateToProps = (state, ownProps) => {
  return {
    Trade: state.form.Trade,
    searchResponse: state.titleSearchResponse
  };
};
export default connect(
  mapStateToProps,
  { searchSellTitle, addToListed }
)(reduxForm({ form: "Trade", validate })(Sell));
