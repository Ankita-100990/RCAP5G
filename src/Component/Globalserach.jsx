import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

import { TextField, MenuItem } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import { buildQueries } from '@testing-library/dom';
// import { BluetoothAudio } from '@mui/icons-material';
import { Box, Paper } from '@mui/material';

const Globalserach = () => {

    const [Portfolio, setPortfolio] = useState('');
    const [Client, setClient] = useState('');
    const [trackingNo, setTrackingNO] = useState('');

    const handleSearch = () => {
        console.log({
            Portfolio,
            Client
        });
    };

    return (
        <>


            <Box
                sx={{

                    display: 'flex',
                    alignItems: 'center',     // vertical center
                    justifyContent: 'center', // horizontal center

                }}
            >
                <Paper sx={{ width: 500, backgroundColor: '#03235fff', color: 'white', p: 2, margin: 3 }}>
                    Global Search content
                </Paper>
            </Box>
            {/* <Typography sx={{ mb: 5, backgroundColor: "#03235fff", color: 'white', fontSize: 30, justifyContent: center }}>
                Global Search</Typography> */}
            <Grid container spacing={2} margin={3}>
                <Grid item xs={6} md={6}>
                    <TextField
                        select
                        fullWidth
                        required
                        label="Portfolio Type"
                        value={Portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                    >
                        <MenuItem value="RETAIL LOAN COLLECTIONS">
                            RETAIL LOAN COLLECTIONS
                        </MenuItem>
                        <MenuItem value="CREDIT CARD COLLECTIONS">
                            CREDIT CARD COLLECTIONS
                        </MenuItem>
                    </TextField>

                </Grid>


                <Grid item xs={6} md={6}>
                    <TextField
                        select
                        fullWidth
                        required
                        label="Client"
                        value={Client}
                        onChange={(e) => setClient(e.target.value)}
                    >
                        <MenuItem value="XYZ">
                            XYZ
                        </MenuItem>
                        <MenuItem value="CREDIT SAISON">
                            CREDIT SAISON
                        </MenuItem>
                    </TextField>
                </Grid>





            </Grid>
        </>
    );
};


export default Globalserach;