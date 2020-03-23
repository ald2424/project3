import React from "react";
import { Link, useLocation } from "react-router-dom";
import './style.css';
import logo from '../../assets/images/sheaRoseLogo.png'



function mainNavBar(){
    
    return(
        <div className="width response bg-danger border border-bottom-0 border-dark">
            <div className="p-3 my-4 dFlex">
                <img src={logo} className="img-fluid m-auto d-block" height="180" width="180"/>
            </div>
            <ul className="nav flex-column pad">
            <li className="nav-item w-100 border-bottom border-dark">
                    <Link to="/login" className="nav-link ml-1 active text-white navLinkscss p-3" href="Login.js" >
                      Log In
                    </Link>
                </li>
                <li className="nav-item w-100 border-bottom border-dark">
                    <Link to="/" className="nav-link ml-1 active text-white navLinkscss p-3" href="Home.js" >
                      Home
                    </Link>
                </li>
                <li className="nav-item w-100 border-bottom border-dark">
                    <Link to="/lessons" className="nav-link ml-1 active text-white navLinkscss p-3" href="Lessons.js" >
                      Lessons
                    </Link>
                </li>
                <li className="nav-item w-100 border-bottom border-dark">
                    <Link to="/horses" className="nav-link ml-1 active text-white navLinkscss p-3" href="MeetTheHorses.js" >
                      Meet The Horses
                    </Link>
                </li>                
            </ul>
            
      </div>
          
    )
}

export default mainNavBar
