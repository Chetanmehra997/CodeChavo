import React from "react";

import AddCardIcon from '@mui/icons-material/AddCard';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';

import { makeStyles } from '@material-ui/core';
import stylesnav from '../styles/NavbarStyle';

import Barchart from "../graphs/Barchart";

import Piechart from "../graphs/Piechart";



import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const useStyles = makeStyles(stylesnav)
function Deshboard() {
  const classes = useStyles()
  return (
    <>


      <Box className={classes.Dashboardpages}>

        <Box style={{
          textAlign: 'center',
          paddingBottom: '2rem',
          fontWeight: '500',
        }}>KYC Status</Box>

        <Box style={{display:'flex', textAlign: 'end',
    justifyContent: 'center',}}>
          <Box>
            <Box>Pending</Box>
        <FormControlLabel value="female" control={<Radio />}/>
        </Box>
        <Box style={{
          width: '10%',
          border: '1px solid blue',
          height: '0px',
        
          marginTop: '2.5rem',
        }}></Box>
        <Box>
            <Box>In Process</Box>
        <FormControlLabel value="female" control={<Radio />}/>
        </Box>
        <Box style={{
          width: '10%',
          border: '1px solid blue',
          height: '0px',
          
          marginTop: '2.5rem',
        }}></Box>
       <Box>
            <Box>Verified</Box>
        <FormControlLabel value="female" control={<Radio />}/>
        </Box>
        <Box style={{
          width: '10%',
          border: '1px solid blue',
          height: '0px',
      
          marginTop: '2.5rem',
        }}></Box>
        <Box>
            <Box>Approved</Box>
        <FormControlLabel value="female" control={<Radio />}/>
        </Box>
        </Box>
       
    

        <Box className={classes.dashboardpadding}>
         <Box>
          <Box className={classes.dashboardsizes}>All Tranasation</Box>
         
          </Box>
          <Box className={classes.Dashboardflex}>
          <Button variant="contained">Select Period</Button>
          <Button variant="contained" style={{background:'white',color:'black',marginLeft: '2rem',}}>Filter</Button>
         
          </Box>
        </Box>
        <Grid container spacing={2} className={classes.dashboardpadding}>
          <Grid item xs={12} md={3} sm={6}>
          <Box className={classes.leftgrid22}>
              
              <Box style={{display:'flex',marginTop: '1rem',}}>
                <Box style={{padding:'1rem'}}>
                 <AddCardIcon/>
                </Box>
                <Box>
                <Box className={classes.leftnumbergray}>Total Income</Box>
                <Box className={classes.leftnumbergray}> Rs 350000</Box>
                </Box>
                
              </Box>
              
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <Box className={classes.leftgrid222}>
              
              <Box style={{display:'flex',marginTop: '1rem',}}>
                <Box style={{padding:'1rem'}}>
                 <AddCardIcon/>
                </Box>
                <Box>
                <Box className={classes.leftnumbergray}>Total Income</Box>
                <Box className={classes.leftnumbergray}> Rs 350000</Box>
                </Box>
                
              </Box>
              
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
          <Box className={classes.leftgrid2222}>
              
              <Box style={{display:'flex',marginTop: '1rem',}}>
                <Box style={{padding:'1rem'}}>
                 <AddCardIcon/>
                </Box>
                <Box>
                <Box className={classes.leftnumbergray}>Total Income</Box>
                <Box className={classes.leftnumbergray}> Rs 350000</Box>
                </Box>
                
              </Box>
              
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
          <Box className={classes.leftgrid22222}>
              
              <Box style={{display:'flex',marginTop: '1rem',}}>
                <Box style={{padding:'1rem'}}>
                 <AddCardIcon/>
                </Box>
                <Box>
                <Box className={classes.leftnumbergray}>Total Income</Box>
                <Box className={classes.leftnumbergray}> Rs 350000</Box>
                </Box>
                
              </Box>
              
            </Box>
          </Grid>
        </Grid>
        {/* second box start */}
        <Grid container spacing={2} className={classes.dashboardpadding}>
          <Grid item xs={12}  sm={8}>
          <Box className={classes.leftgrid2}>
              <Box className={classes.Dashboardflexspace}>
                <Box>Amount Per Month</Box>
                <Box><Button><MoreVertIcon /></Button></Box>
              </Box>
              <Barchart />
            </Box>
          </Grid>
          <Grid item xs={12}  sm={4}>
          <Box className={classes.leftgrid2}>
              <Box className={classes.Dashboardflexspace}>
                <Box>Mode Of Transaction</Box>
                <Box><Button><MoreVertIcon /></Button></Box>
              </Box>
              
              
              <Piechart />
            </Box>
          </Grid>

        </Grid>
       
      </Box>

    </>
  )
}
export default Deshboard;