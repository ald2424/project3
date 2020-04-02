import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./dashboard.css";
import "../InstAnnouncements";
import InstructorAnnouncements from "../../pages/InstructorAnnouncements";


class InstructorDashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

    openStudentSignIn() {
    window.location.replace("/studentsignup");
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
                  <a className="nav-link text-dark active" href="/editAnnouncements">Announcements</a>
                </li>
                <li className="nav-item">
                 <button className="nav-link text-dark btn-link" onClick={this.openStudentSignIn}>Student Sign Up</button>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Schedule</a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#">Logout</a>
                </li> */}

                <li className="nav-item">
                  <button className="nav-link text-dark btn-link" onClick={this.onLogoutClick}>Logout</button>
                </li>
              </ul>
           
            {/* <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable bg-danger font-weight-bold text-light accent-3"
            >
              Logout
            </button> */}
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