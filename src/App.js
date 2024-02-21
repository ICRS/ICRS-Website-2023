import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Layout from './Components/Layout'
import Events from './Components/Events'
import Projects from './Components/Projects'
import Facilities from './Components/Facilities'
import OneOone from './Components/OneOone'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="ICRSWEB/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="projects" element={<Projects />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="101" element={<OneOone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
