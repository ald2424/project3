import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./dashboard.css";
import "../InstEditAnnouncements";


class InstructorDashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

    openStudentSignIn() {
    window.location.replace("/studentsignup");
    // window.location.reload(false);
  };

    openAnnouncements() {
      window.location.replace("/editAnnouncements");
  };

  openViewAnnouncements() {
    window.location.replace("/viewAnnouncements");
  };

  openMessageBoard() {
    window.location.replace("/messageboard");
    // window.location.reload(false);
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container mx-auto mt-5 pt-5">
        <div className="row">
          <div className="col s12 center-align">
            <h4 className="font">
              Welcome {user.name.split(" ")[0]}!
              
            </h4>
           
           
           
               <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button className="nav-link text-dark active" onClick={this.openAnnouncements}>Edit Announcements</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link text-dark active" onClick={this.openViewAnnouncements}>View Announcements</button>
                </li>
                <li className="nav-item">
                 <button className="nav-link text-dark btn-link" onClick={this.openStudentSignIn}>Student Sign Up</button>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Schedule</a>
                </li>
                <li className="nav-item">
                 <button className="nav-link text-dark btn-link" onClick={this.openMessageBoard}>Message Board</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link text-dark btn-link" onClick={this.onLogoutClick}>Logout</button>
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

  InstructorDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(InstructorDashboard);