import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import MainNavBar from "./components/MainNavBar";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Lessons from "./pages/Lessons";
// import Horses from "./pages/MeetTheHorses";
// import LoginPage from "./pages/Login";
// import Calendar from "./components/Calendar";
// import StudentForm from "./pages/StudentLogin";
// import InstructorForm from "./pages/InstructorLogin";
// import MainNavBar from "./components/MenuPropFunction"
import "bootstrap/dist/css/bootstrap.min.css";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
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
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

// <div>
//   <MainNavBar />
//   <Header />
//   <Switch>
//   <Route exact path='/' component={Home} />
//   <Route exact path='/lessons' component={Lessons} />
//   <Route exact path='/horses' component={Horses} />
//   <Route exact path='/login' component={LoginPage} />
//   <Route exact path='/studentform' component={StudentForm} />
//   {/* <Route exact path='/instructorform' component={InstructorForm} /> */}
//   </Switch>
//   <Footer />
// </div>
