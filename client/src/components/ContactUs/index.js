import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerContact } from "../../actions/authActions";

class ContactUsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //    // nextProps.history.push("/dashboard"); // push user to dashboard when they login
  //    window.location.replace("/");
  //  }


  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    };

    this.props.registerContact(userData);
    console.log(userData);
    alert("Info submitted...")
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <form onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.phone}
                  id="phone"
                  type="text"
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.message}
                  id="message"
                  type="text"
                />
                <label htmlFor="message">Brief Message</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable grey accent-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
ContactUsForm.propTypes = {
  registerContact: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(mapStateToProps, { registerContact })(withRouter(ContactUsForm));
