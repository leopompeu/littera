import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from "react-ga4";
import ReactGAOld from 'react-ga';

ReactGA.initialize("G-54LQP68VFV")
ReactGAOld.initialize("G-54LQP68VFV")

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
