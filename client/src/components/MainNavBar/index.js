import React from "react";
import { Link, useLocation } from "react-router-dom";
import './style.css';

function MainNavBar(props){

    return(
      
        <div>
            <li className="nav-item w-100 border-bottom border-dark">
                    <Link to={props.path} className="nav-link ml-1 active text-white navLinkscss p-3" href={props.href} >
                      {props.title}
                    </Link>
                </li>
               
         </div>
          
    )
}

export default MainNavBar
