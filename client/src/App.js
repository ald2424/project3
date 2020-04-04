import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Horses from "./pages/MeetTheHorses";
import LoginPage from "./pages/Login";
import Calendar from "./components/Calendar";
import StudentForm from "./pages/StudentLogin";
import InstructorForm from "./pages/InstructorLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewAnnouncements from "./pages/ViewAnnouncementsPage";
import Wrapper from "./components/Wrapper";

import MainNavBar from "./utils/MenuPropFunction";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";

// import InstructorDashboard from "./components/dashboard/InstructorDashboard.js";
// import StudentDashboard from "./components/dashboard/StudentDashboard";
import InstEditAnnouncements from "./components/InstEditAnnouncements";

import Dashboard from "./components/dashboard";
import StudentSignUp from "./components/StudentSignUp/studentsignup";
import MessageBoard from "./components/MessageBoard/MessageResults";
import ContactUs from "./components/ContactUs";

//Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <div>
      <Wrapper>
        <Provider store={store}>
          <Router>
            <MainNavBar />
            <div className="pad">
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/lessons" component={Lessons} />
                <Route exact path="/horses" component={Horses} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/studentform" component={StudentForm} />
                <Route
                  exact
                  path="/instructorform"
                  component={InstructorForm}
                />
                <Route exact path="/contactus" component={ContactUs} />

                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/studentsignup"
                  component={StudentSignUp}
                />
                <PrivateRoute
                  exact
                  path="/editAnnouncements"
                  component={InstEditAnnouncements}
                />
                <PrivateRoute
                  exact
                  path="/viewAnnouncements"
                  component={ViewAnnouncements}
                />
                <PrivateRoute
                  exact
                  path="/messageboard"
                  component={MessageBoard}
                />
              </Switch>
            </div>
          </Router>
          <Footer />
        </Provider>
      </Wrapper>
    </div>
  );
}

export default App;
