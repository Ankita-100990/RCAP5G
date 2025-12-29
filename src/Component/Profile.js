import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Divider from '@mui/material/Divider';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { blue } from '@mui/material/colors';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ListItemIcon from "@mui/material/ListItemIcon";


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            color: blue[500],
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'rgba(230, 236, 247, 1)',
        backgroundColor: "#03235fff",
        boxShadow:
            'rgba(80, 175, 238, 1) 0px 0px 0px 0px, rgba(248, 253, 253, 0.05) 0px 0px 0px 1px, rgba(133, 129, 129, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
                ...theme.applyStyles('dark', {
                    color: 'White',

                }),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.common.white,
                    theme.palette.action.selectedOpacity,

                ),
            },
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
        }),
    },
}));

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <i class="material-icons "
                style={{ marginRight: "20px" }}
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                account_circle  </i>



            <StyledMenu
                id="demo-customized-menu"
                slotProps={{
                    list: {
                        'aria-labelledby': 'demo-customized-button',
                    },
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <Divider sx={{ my: 1.2 }} />
                <MenuItem onClick={handleClose} disableRipple >

                    <Box sx={{ textAlign: "center" }}>
                        <Typography fontWeight="bold">Ankita Patel</Typography>
                        <Typography >Software developer</Typography>
                        <Typography >Surat</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple >

                    <PermIdentityIcon />

                    My Profile
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <LogoutRoundedIcon />
                    Logout
                </MenuItem>


            </StyledMenu>
        </div>
    );
}
