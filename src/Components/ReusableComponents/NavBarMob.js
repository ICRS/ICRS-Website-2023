import React, { useState } from 'react';
import { AppBar, Typography, IconButton, Menu, MenuItem, Grid, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
const NavBarMob = () => {
  const links = [
    {text: 'Home', link: '/'},
    {text: 'Projects', link: '/projects'},
    {text: 'Facilities', link: '/facilities'},
    {text: '101', link: '/101'},
    {text: 'Sponsorship', link: '/sponsorship'},
    {text: 'Events', link: '/events'},
  ]
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: '#fff',
        boxShadow: 'none',
        width:'100%',
      }}
    >
      <Grid container spacing={0} sx={{width:'100%',padding:0, height:'60px',}}>
        <Grid item xs={1} margin={'auto'}>
          <img src='./images/logo.png' alt='icrs-logo' style={{width:'32px',height:'32px'}} />
        </Grid>
        <Grid item xs={8} margin={'auto'}>
          <Typography variant="h6" color="black" sx={{flexGrow:1}} align='center' marginX={1}>
            Imperial College Robotics
          </Typography>
        </Grid>
        <Grid item md={2} margin={'auto'}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            sx={{borderRadius:'10%',backgroundColor:'#0084FF',margin:'1px', '&:hover':{backgroundColor:'#005CB3'}}}
            
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {links.map((linkItem, index) => (
              <MenuItem key={index} component={NavLink} to={linkItem.link} onClick={handleClose}>
                <ListItemText sx={{color:'black',padding:'5px'}} align='center'>{linkItem.text}</ListItemText>
              </MenuItem>
            ))
            }
          </Menu>
        </Grid>
        
      </Grid>
    </AppBar>
  );
};

export default NavBarMob;
