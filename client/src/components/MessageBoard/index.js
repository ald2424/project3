import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class MessageBoard extends Component {
  render() {
    return (
      <div className="container">
          <h1>Incoming Messages from ContactUs</h1>
      </div>
    );
  }
}

export default MessageBoard;