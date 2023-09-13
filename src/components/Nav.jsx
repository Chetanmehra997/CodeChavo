import React from "react";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';

import NotificationsIcon from '@mui/icons-material/Notifications';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@material-ui/core';
import stylesnav from '../styles/NavbarStyle';




const useStyles = makeStyles(stylesnav)
const drawerWidth = 250;
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#FFFFFF",
    },
  },
});
function Nav({ children }) {
  const classes = useStyles()
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function logout() {
    localStorage.removeItem('university_token');
    navigate('/')
  }
  return (
    <>
      <Box>
        <Toolbar className={classes.Toolbarpadding}></Toolbar>
        <Box sx={{ flexGrow: 1, position: 'fixed' }}>
          <AppBar className={classes.redbackgroundnav}>

            <Toolbar>
              
              <Typography variant="h6" component="div" className={classes.Typography1}>
                <Typography sx={{ marginBottom: '7%', paddingTop: '1%', fontSize: '20px',display:"flex" }}><Box style={{color:'blue',fontWeight:700}}>Sab</Box> <Box style={{color:'orange',fontWeight:700}}>Paisa</Box> </Typography>
              </Typography>

              <Typography className={classes.Dashboardflex0}>
                <ThemeProvider theme={theme} >
                  {/* <TextField id="" label="Search" color="primary" variant="standard" focused className={classes.textfieldnav} /> */}
                <Box style={{color:'black'}}>Welcome Back</Box>  
                </ThemeProvider>
                <Typography style={{ display: 'flex' }}>
                <Box style={{color:'black',marginRight: '2rem',}}>Merchant ID : 14662</Box> 

                <Box style={{color:'#1976d2'}}>  <NotificationsIcon /></Box> 
                <Box><Button variant="outlined" style={{marginLeft:'1rem'}}><AccountCircleIcon/>Hello,Vikram</Button></Box>
                </Typography>
              </Typography>

            </Toolbar>
          </AppBar>
        </Box>



        <Box className={classes.Dashboard}>
          <Drawer
            className={classes.displaynone}
            variant="permanent"
            sx={{

              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth, boxSizing: 'border-box', marginTop: '5rem'

              },
            }}
          >
            
            <Box className={classes.leftnavbar11}>
              <Box className={classes.leftnavbarorange}>
                <HomeIcon className={classes.leftnavbaricons} />
                <Link to='/' style={{ color: 'cornflowerblue', textDecoration: 'none', }}>Dashboard</Link>
              </Box>
              <Box className={classes.leftnavbar}>
                
                  <CalendarMonthIcon className={classes.leftnavbaricons} />
                  Complete Kyc
                
              </Box>
          
              <Box className={classes.leftnavbar}>
                
                <CalendarMonthIcon className={classes.leftnavbaricons} />
                Integration Kit
              
            </Box>

            <Box className={classes.leftnavbar}>
                
                  <CalendarMonthIcon className={classes.leftnavbaricons} />
                  Product Catalog
                
              </Box>

              <Box className={classes.leftnavbar}>
                
                  <CalendarMonthIcon className={classes.leftnavbaricons} />
                  Transaction History
                
              </Box>

              <Box className={classes.leftnavbar}>
                
                  <CalendarMonthIcon className={classes.leftnavbaricons} />
                  Settlement Report
                
              </Box>

              <Box className={classes.leftnavbar}>
                
                  <CalendarMonthIcon className={classes.leftnavbaricons} />
                  Refund Txn History
                
              </Box>

              <Box className={classes.leftnavbar}>
                
                <CalendarMonthIcon className={classes.leftnavbaricons} />
                Chargeback Txn History
              
            </Box>

            <Box className={classes.leftnavbar}>
                
                <CalendarMonthIcon className={classes.leftnavbaricons} />
                Transcation Enquiry
              
            </Box>

            <Box className={classes.leftnavbar}>
                
                <CalendarMonthIcon className={classes.leftnavbaricons} />
                Transaction Summary
              
            </Box>

            <Box className={classes.leftnavbar}>
                
                <CalendarMonthIcon className={classes.leftnavbaricons} />
                FAQs/Help
              
            </Box>

            </Box>

          </Drawer>
          {children}
        </Box>
      </Box>


    </>
  )
};
export default Nav;