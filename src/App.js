import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react";
import Home from './Components/Home'
import Layout from './Components/Layout'
import Events from './Components/Events'
import Projects from './Components/Projects'
function App() {
  const routerPath = (process.env.NODE_ENV === 'production')
    ? 'ICRS-Website-2023/' : ''

  console.log(routerPath + 'router path ')
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routerPath} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="projects" element={<Projects />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
