 import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import GrainIcon from '@mui/icons-material/Grain';
import Paper from '@mui/material/Paper';
// import Menu  from '../Menu';
// import Header from './Header';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}



export default function IconBreadcrumbs() {
  return ( 
    <div role="presentation" onClick={handleClick}>
   
     <Paper variant="elevation" sx={{m :2 , p:1}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="prime"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        
        <Typography
          sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
        >
          {/* <sx={{ mr: 0.5 }} fontSize="inherit" /> */}
         
       Dashboard
        </Typography>
      </Breadcrumbs>
      </Paper>


<Paper variant="elevation" sx={{m :2 , p:1}}>
 <Stack spacing={2} direction="row">

        <Button variant="contained">Serach</Button>
       
       <Button variant="contained" color='error' >
        Reset
      </Button>

</Stack>

      
      </Paper>

    </div>


  );
}
