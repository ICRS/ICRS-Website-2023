import React, { useState, useEffect, useMediaQuery } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import breakpoints from './breakpoints'
const NavBarMob = () => {
  const [scrolling, setScrolling] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        backgroundColor: scrolling ? '#fff' : 'rgba(255, 255, 255, 0.7)',
        transition: 'background-color 0.3s ease',
        boxShadow: 'none',
        width:'100%',
      }}
    >
      <Grid container spacing={0} sx={{width:'100%',padding:0, height:'60px',}}>
        <Grid item xs={2} margin={'auto'}>
          <img src='/images/logo.png' alt='icrs-logo' style={{width:'32px',height:'32px'}} />
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
            sx={{borderRadius:'10%',backgroundColor:'gray',margin:'1px'}}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Events</MenuItem>
            <MenuItem onClick={handleClose}>Projects</MenuItem>
            <MenuItem onClick={handleClose}>Facilities</MenuItem>
            <MenuItem onClick={handleClose}>101</MenuItem>
            <MenuItem onClick={handleClose}>Wiki</MenuItem>
            <MenuItem onClick={handleClose}>Sponsorship</MenuItem>
          </Menu>
        </Grid>
        
      </Grid>
    </AppBar>
  );
};

export default NavBarMob;
