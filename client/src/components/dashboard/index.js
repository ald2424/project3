import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./dashboard.css";
import InstructorDashboard from "./InstructorDashboard";
import StudentDashboard from "./StudentDashboard";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    if (user && user.admin) {
        console.log('logged in as admin')
      return <InstructorDashboard />;
    } else {
        console.log('logged in as student')
      return <StudentDashboard />;
    }
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
