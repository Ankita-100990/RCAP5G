// import React from "react";
import "./App.css";
//  import { NavLink } from "react-router-dom";

import logo from "./Images/focus.png";
import Profile from "./Component/Profile";
import Notification from "./Component/Notification";
import Searchicon from "./Component/Searchicon";

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
{/*               
<i class="material-icons " style={{marginRight :"20px"}}>
                    account_circle  </i>  */}


                    <Profile/>
            <Notification/>
                    {/* <i class="material-icons " style={{marginRight :"20px"}}>
                    notifications</i> */}

                     <i class="material-icons " style={{marginRight :"20px"}}>
                    apps</i>
                     <i class="material-icons " style={{marginRight :"20px"}}>
                   fullscreen</i> 
                     {/* <i class="material-icons " style={{marginRight :"20px"}} >
                 search </i>  */}

 <Searchicon/>




                  <i class="material-icons " style={{marginRight :"20px"}}>
                group</i> 
                </div>
            </div>
            </div>
        </>
    );
};

export default Menu;