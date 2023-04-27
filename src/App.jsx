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

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  }, []);

  return (
      <div>{loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
         ) : (
          <div>
            <MyNavBar/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/aplicativos" element={<Aplicativos />} />
              <Route path="/seguranca" element={<Seguranca />} />
              <Route path="/sites" element={<Sites />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>)}
    </div>
    
  )
}

export default App