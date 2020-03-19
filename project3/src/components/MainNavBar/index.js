import React from "react";
import './style.css';
import logo from '../../assets/images/sheaRoseLogo.png'



function mainNavBar(){
    
    return(
        <div className="width bg-danger">
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
            <       a className="nav-link  ml-1 disabled text-white navLinkscss p-3" href="#">Summer Camps</a>
                </li>
            </ul>
            <div className="p-3 my-4">
                <img src={logo} className="img-fluid rounded my-5 mx-auto d-block" height="125" width="125"/>
            </div>
      </div>
          
    )
}

export default mainNavBar
