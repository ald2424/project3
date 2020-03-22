import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavBar from "./components/MainNavBar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home";
import Lessons from "./pages/Lessons"
import Horses from "./pages/MeetTheHorses"
import Login from "./pages/Login"

function App() {
    return (
      <Router>
      <div>
        <MainNavBar />
        <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/lessons' component={Lessons} />
        <Route exact path='/horses' component={Horses} />
        <Route exact path='/login' component={Login} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
  
  export default App;