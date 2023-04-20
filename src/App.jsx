import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Aplicativos from "./pages/Aplicativos"
import Orçamentos from "./pages/Orcamentos"
import Seguranca from "./pages/Seguranca"
import Sites from "./pages/Sites"
import SobreNos from "./pages/SobreNos"
import Termos from "./pages/Privacidade"
import Valores from "./pages/Valores"
import LGPD from "./pages/LGPD"
import CentralSuporte from "./pages/CentralSuporte";
import NoPage from "./pages/NoPage";

import { MyNavBar } from "./components";

import React from 'react'
import Footer from "./components/Footer";

import TagManager from "react-gtm-module";

const App = () => {

  return (
    <div>
      <MyNavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/aplicativos" element={<Aplicativos />} />
        <Route path="/orcamentos" element={<Orçamentos />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/privacidade" element={<Termos />} />
        <Route path="/valores" element={<Valores />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="/contato" element={<CentralSuporte />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default App