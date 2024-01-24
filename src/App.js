import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react";
import Home from './Components/Home'
import Layout from './Components/Layout'
import Events from './Components/Events'
import Projects from './Components/Projects'
import Facilities from './Components/Facilities'
function App() {
return (<p>react app</p>)
}
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={'ICRS-Webiste-2023/'} element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="events" element={<Events />} />
//           <Route path="projects" element={<Projects />} />
//           <Route path="facilities" element={<Facilities />} />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
