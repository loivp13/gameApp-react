import React, { Component } from "react";
import axios from "axios";
import BasicCollapse from "../BasicCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API_KEY from '../apiKeys/apiKeys';
import { connect } from "react-redux";
import { selectShowPage } from "../redux/actions";


export class UserAccount extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: null || "realUsername",
      collapse: true,
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    // console.log(this.state)
    // axios({
    //   url: "/games",
    //   method: "POST",
    //   headers: {
    //     'Accept': 'application/json',
    //     'user-key': API_KEY.IgdbKeys
    //   },
    //   data: 'fields name,popularity; sort popularity desc;'
    // })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
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
          <div className={ShowStyle}>{this.props.currentPage}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.currentShowPage.currentPage
  }
}

export default connect(mapStateToProps,  {selectShowPage}) (UserAccount);
