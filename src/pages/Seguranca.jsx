import React from 'react'

import { isMobile } from 'react-device-detect'
import DiferencialSeguranca from '../components/DiferencialSeguranca'
import Div1Seguranca from '../components/Div1Seguranca'
import Footer from '../components/Footer'
import OrcamentoSeguranca from '../components/OrcamentoSeguranca'
import TimelineSeguranca from '../components/TimelineSeguranca'
import styles from '../style'

const Seguranca = () => {
    return (
        <div className="bg w-full overflow-hidden">            
            {/* Div1Sites */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Div1Seguranca/>
              </div>
            </div>
    
            {/* Body */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <DiferencialSeguranca/>
                <TimelineSeguranca/>
                <OrcamentoSeguranca/>
                <Footer/>
              </div>
            </div>
    
          </div>
    )
}

export default Seguranca