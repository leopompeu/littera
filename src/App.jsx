import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Aplicativos from "./pages/Aplicativos"
import Seguranca from "./pages/Seguranca"
import Sites from "./pages/Sites"
import SobreNos from "./pages/SobreNos"
import NoPage from "./pages/NoPage";

import { MyNavBar } from "./components";

import React from 'react'
import Footer from "./components/Footer";

import TagManager from "react-gtm-module";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

  const [loading, setLoading] = useState(false);
/*   document.addEventListener('contextmenu', event => event.preventDefault());
 */
  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 1500);
  }, []);

  return (
          <div>
            <MyNavBar/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/aplicativos" element={<Aplicativos />} />
              <Route path="/seguranca" element={<Seguranca />} />
              <Route path="/sites" element={<Sites />} />
              {/*<Route path="/sobre" element={<SobreNos />} /> */}
              <Route path="*" element={<NoPage />} />
              <Route path="/assets" element={<NoPage />} />
            </Routes>
          </div>
    
  )
}

export default App