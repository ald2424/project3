import React, { Component } from "react";
import MessageList from "./index";
import { renderContacts } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";

class MessageResultsContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: [],
      email: [],
      phone: [],
      message: [],
      date: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
      date: this.state.date
    };

    this.props.renderContacts(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Incoming Messages!!!</h1>
        </div>
        <MessageList />
      </div>
    );
  }
}

MessageResultsContainer.propTypes = {
    renderContacts: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { renderContacts }
  )(MessageResultsContainer);

