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


  if (window.innerWidth <= breakpoints.md) {
    var navbar = <NavBarMob/>
  } else {
    var navbar = <NavBar/>
  }
  return (
    <div className="Home" sx={{margin:0}} >

      {navbar}
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
