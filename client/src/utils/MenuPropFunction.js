import React from 'react';
import menuItems from "./MainMenuItems";
import Menu from "../components/MainNavBar/index.js";
import logo from '../assets/images/sheaRoseLogo.png'
import "../App.css";

function renderMenuItems(){
    return (
        <div className="width response bg-danger border border-bottom-0 border-dark ">
            <div className="p-3 my-4 dFlex">
                <img src={logo} className="img-fluid m-auto d-block" height="180" width="180"/>
            </div>
            <ul className="nav flex-column pad">
            {menuItems.map(item => (
                <Menu 
                    path={item.path}
                    href={item.href}
                    title={item.title}
                />
            ))}
            </ul>
        </div>
    )
}
export default renderMenuItems;