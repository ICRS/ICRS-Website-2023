import { Outlet } from "react-router-dom";
import React, { useState, useEffect} from "react";
import breakpoints from "./ReusableComponents/breakpoints";
import NavBarMob from './ReusableComponents/NavBarMob'
import NavBar from "./ReusableComponents/NavBar";
import Grid from '@mui/material/Grid';
import Footer from "./ReusableComponents/Footer";
const Layout = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  var navbar = null;
  if (windowWidth <= breakpoints.md) {
    navbar = <NavBarMob/>
  } else {
    navbar = <NavBar/>
  }
  return (
    <>
      {navbar}
      <Grid sx={{height: "60px"}}></Grid>
      <Outlet />
      <Footer></Footer>
    </>
  )
};

export default Layout;