// import React from "react";
import "./App.css";
// import { NavLink } from "react-router-dom";

import logo from "./Images/focus.png";


const Menu = () => {
    return (
        <>
        <div class="container-fluid">
            <div className="box row">
            
                <div className="p-2 container-fluid text-white fw-bold col-6">
                    <img src={logo} alt="" width={25} style={{ marginRight: 5 }} />
                    RCAP5G
                    </div>


                <div className="p-2 container-fluid  text-white col-6  d-flex flex-row-reverse "
                 >
                    <i class="material-icons " style={{marginRight :"20px"}}>account_circle</i>
                     <i class="material-icons " style={{marginRight :"20px"}}>account_circle</i>
                     <i class="material-icons " style={{marginRight :"20px"}}>account_circle</i>
                     <i class="material-icons " style={{marginRight :"20px"}}>account_circle</i>
                </div>
            </div>
            </div>
        </>
    );
};

export default Menu;