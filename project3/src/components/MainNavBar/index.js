import React from "react";
import './style.css';
import logo from '../../assets/images/sheaRoseLogo.png'



function mainNavBar(){
    
    return(
        <div className="width response bg-danger border border-dark">
            <div className="p-3 my-4">
                <img src={logo} className="img-fluid m-auto d-block" height="180" width="180"/>
            </div>
            <ul className="nav flex-column pad">
                <li className="nav-item w-100 border-bottom border-dark">
                    <a className="nav-link ml-1 active text-white navLinkscss p-3" href="#">Home</a>
                </li>
                <li className="nav-item w-100 border-bottom border-dark">
                    <a className="nav-link ml-1 text-white navLinkscss p-3" href="#">Lessons</a>
                </li>
                <li className="nav-item w-100 border-bottom border-dark">
                    <a className="nav-link ml-1 text-white navLinkscss p-3" href="#">Meet The Horses</a>
                </li>
                <li className="nav-item w-100 border-bottom border-dark">
            <       a className="nav-link  ml-1 text-white navLinkscss p-3" href="#">Summer Camps</a>
                </li>
            </ul>
            
      </div>
          
    )
}

export default mainNavBar
