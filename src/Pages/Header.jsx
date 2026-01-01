import React from "react";
import { NavLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,

} from "@mui/material";
import Box from '@mui/material/Box';
// import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';
import PermMediaSharpIcon from '@mui/icons-material/PermMediaSharp';
import WebAssetSharpIcon from '@mui/icons-material/WebAssetSharp';


const Header = () => {

    return (
        <>

            <AppBar position="static" 
             sx={{ backgroundColor: "#1a237e" }}>
                <Toolbar sx={{
                    minHeight: "48px !important",
                    padding: "1 12px"
                }}>
                    <NavLink to="/Dashboard" className="text-decoration-none text-white">
                        <Box sx={{ display: "flex", alignItems: "center", gap:0.5 }}>
                            <DashboardIcon />
                            <Typography variant="h6" sx={{ fontSize: '0.90rem' }}>
                                Dashboard
                            </Typography>

                        </Box>
                    </NavLink>

                    <NavLink to="/General" className="text-decoration-none text-white">
                        <Box sx={{ display: "flex", alignItems: "center", ml: 5 ,gap:0.5 }}>

                            <GroupSharpIcon />
                            <Typography variant="h6" sx={{ fontSize: '0.90rem' }} >
                                General
                            </Typography>
                        </Box>
                    </NavLink>


                    <NavLink to="/Communication" className="text-decoration-none text-white">
                        <Box sx={{ display: "flex", alignItems: "center",ml: 5 ,gap:0.5 }}>

                            <BusinessSharpIcon/>
                            <Typography variant="h6" sx={{ fontSize: '0.90rem' }} >
                                Communication
                            </Typography>
                        </Box>
                    
                    </NavLink>

                    <NavLink to="/Core Collection" className="text-decoration-none text-white">
                        <Box sx={{ display: "flex", alignItems: "center",ml: 5 ,gap:0.5}}>

                            <PermMediaSharpIcon/>
                            <Typography variant="h6" sx={{ fontSize: '0.90rem' }} >
                               Core Collection
                            </Typography>
                        </Box>
                    </NavLink>
  
  
  <NavLink to="/Asset" className="text-decoration-none text-white">
                        <Box sx={{ display: "flex", alignItems: "center",ml: 5 ,gap:0.5}}>

                            <WebAssetSharpIcon/>
                            <Typography variant="h6" sx={{ fontSize: '0.90rem' }} >
                              Asset
                            </Typography>
                        </Box>
                    </NavLink>


                    <NavLink to="/Employee" className="text-decoration-none text-white">
                        <Box sx={{ display: "flex", alignItems: "center",ml: 5 ,gap:0.5}}>

                            <GroupSharpIcon/>
                            <Typography variant="h6" sx={{ fontSize: '0.90rem' }} >
                              Employee
                            </Typography>
                        </Box>
                    </NavLink>
  
                </Toolbar>
            </AppBar>

        </>
    );

};
export default Header;