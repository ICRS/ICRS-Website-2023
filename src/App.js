import React, { useState, useEffect} from "react";
// import axios from "axios"
// import GetCheckerForm from "./GetCheckerForm";
// import PostCheckerForm from "./PostCheckerForm";
import NavBar from "./ReusableComponents/NavBar";
import HeroImg from "./landingPageContent/HeroImg";
import ContactInfoBox from "./landingPageContent/ContactInfo";
import Intro from "./landingPageContent/Intro";
import WhatWeDo from "./landingPageContent/WhatWeDo";
import ImgLinkList from "./landingPageContent/ImgLinkList";
import Sponsors from "./landingPageContent/Sponsors";
import breakpoints from "./ReusableComponents/breakpoints";
import NavBarMob from './ReusableComponents/NavBarMob'
function App() {


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
    <div className="App" sx={{margin:0}} >

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

export default App;
