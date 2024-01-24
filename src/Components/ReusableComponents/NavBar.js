import React from 'react';
import { AppBar, Typography, ListItemText, List, ListItem, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  const links = [
    {text: 'Home', link: '/'},
    {text: 'Projects', link: '/projects'},
    {text: 'Facilities', link: '/facilities'},
    {text: '101', link: '/101'},
    {text: 'Sponsorship', link: '/sponsorship'},
    {text: 'Events', link: '/events'},
  ]
  return (
    <Grid container>
        <AppBar
        position="fixed"
        style={{
          backgroundColor: '#fff',
          transition: 'background-color 0.3s ease',
          boxShadow: 'none',
          width:'100%',
        }}
      >
        <Grid container spacing={0} sx={{padding:0, height:'60px'}}>
          <Grid item xs={2} sx={{display:'flex',margin:'auto',}}>
            <img src='./images/logo.png' alt='icrs-logo' style={{width:'32px',height:'32px',margin:'auto'}} />
          </Grid>
          <Grid item xs={3} margin={'auto'}>
            <Typography variant="h6" color="black" sx={{flexGrow:1}} align='center' marginX={1}>
              Imperial College Robotics
            </Typography>
          </Grid>
          <Grid item xs={7} margin={'auto'}>
            <List sx={{ display: 'flex', flexDirection: 'row', padding:'0' }}>
              {links.map((linkItem, index) => (
                <ListItem key={index} component={NavLink} to={linkItem.link}>
                  <ListItemText sx={{color:'black',padding:'5px'}} align='center'>{linkItem.text}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </AppBar>
    </Grid>
    
  );
};

export default NavBar;
