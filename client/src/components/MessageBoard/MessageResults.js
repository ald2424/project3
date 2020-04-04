import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import MessageResults from "./index";

class MessageResultsContainer extends Component {
  state = {
    name: [],
    email: [],
    phone: [],
    message: []
  };

//   componentDidMount() {
//     this.setState({ name: req.data.name }).catch(err => console.log(err));
//   };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  
//   handleButtonSubmit = event => {
//     event.preventDefault();
//     this.state.search
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };


  render() {
    return (
      <div className="container">
        <MessageResults results={this.state.results} />
      </div>
    );
  }
}

export default MessageResultsContainer;
