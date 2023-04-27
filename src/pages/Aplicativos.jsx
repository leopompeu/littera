import React from 'react'

import { isMobile } from 'react-device-detect'
import DiferencialApps from '../components/DiferencialApps'
import Div1Apps from '../components/Div1Apps'
import Footer from '../components/Footer'
import OrcamentoApps from '../components/OrcamentoApps'
import styles from '../style'

const Aplicativos = () => {
    return (
        <div className="bg w-full overflow-hidden">            
            {/* Div1Apps */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Div1Apps/>
              </div>
            </div>
    
            {/* Body */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <OrcamentoApps/>
                <DiferencialApps/>
                <Footer/>
              </div>
            </div>
    
          </div>
    )
}

export default Aplicativos