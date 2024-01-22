import React from "react";
import HeroImg from "./Home/HeroImg";
import ContactInfoBox from "./Home/ContactInfo";
import Intro from "./Home/Intro";
import WhatWeDo from "./Home/WhatWeDo";
import ImgLinkList from "./Home/ImgLinkList";
import Sponsors from "./Home/Sponsors";

function Home() {
  return (
    <div className="Home" sx={{margin:0}} >
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
