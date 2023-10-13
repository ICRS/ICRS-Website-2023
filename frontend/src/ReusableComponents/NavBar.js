import React, { useState, useEffect, useMediaQuery } from 'react';
import { AppBar, Toolbar, Typography, ListItemText, List, ListItem, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import breakpoints from './breakpoints'
const NavBar = () => {
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

  const links = [
    {text: 'Home', link: '/'},
    {text: 'Projects', link: '/projects'},
    {text: 'Facilities', link: '/facilities'},
    {text: '101', link: '/101'},
    {text: 'Sponsorship', link: '/sponsorship'},
    {text: 'Events', link: '/events'},
  ]
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
      <Grid container spacing={0} sx={{padding:0, height:'60px'}}>
        <Grid item xs={2} sx={{display:'flex',margin:'auto',}}>
          <img src='/images/logo.png' alt='icrs-logo' style={{width:'32px',height:'32px',margin:'auto'}} />
        </Grid>
        <Grid item xs={3} margin={'auto'}>
          <Typography variant="h6" color="black" sx={{flexGrow:1}} align='center' marginX={1}>
            Imperial College Robotics
          </Typography>
        </Grid>
        <Grid item xs={7} margin={'auto'}>
          <List sx={{ display: 'flex', flexDirection: 'row', padding:'0' }}>
            {links.map((linkItem, index) => (
              <ListItem button key={index} component="a" href={linkItem.link}>
                <ListItemText sx={{color:'black', backgroundColor:'lightgray',padding:'5px'}} align='center'>{linkItem.text}</ListItemText>
              </ListItem>
             ))}
          </List>
        </Grid>
        
      </Grid>
    </AppBar>
  );
};

export default NavBar;
