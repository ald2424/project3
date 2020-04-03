import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import MessageResults from "./index";

class MessageResultsContainer extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    {{ this.state.results; }}
  }

  render() {
    return (
      <div className="container">
        <MessageResults results={this.state.results} />
      </div>
    );
  }
}

export default MessageResultsContainer;
