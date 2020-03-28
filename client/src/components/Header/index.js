import React from "react";
import './style.css';
import logo from '../../assets/images/sheaRoseLogo.png'




function Header(){
    
    return(
        <div className="container">
            <div className="">
                <h1 className="text-center fonts">Shea Rose Farm</h1>
                <div className="p-3 my-4 m-auto">
                    <img src={logo} className="img-fluid m-auto d-block" height="250" width="250"/>
                </div>                
            </div>
        </div>
          
    )
}

export default Header