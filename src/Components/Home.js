import React, { useState, useEffect} from "react";
import HeroImg from "./Home/HeroImg";
import ContactInfoBox from "./Home/ContactInfo";
import Intro from "./Home/Intro";
import WhatWeDo from "./Home/WhatWeDo";
import ImgLinkList from "./Home/ImgLinkList";
import Sponsors from "./Home/Sponsors";
import breakpoints from "./ReusableComponents/breakpoints";
import NavBarMob from './ReusableComponents/NavBarMob'
import NavBar from "./ReusableComponents/NavBar";
import Grid from '@mui/material/Grid';
function Home() {

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
    <div className="Home" sx={{margin:0}} >

      {navbar}
      <Grid sx={{height: "60px"}}></Grid>
      <HeroImg/>
      <Intro />
      <WhatWeDo />
      <ImgLinkList />
      <ContactInfoBox/>
      <Sponsors />
    </div>
  );
}

export default Home;
