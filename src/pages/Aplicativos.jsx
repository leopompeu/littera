import React from 'react'

import { isMobile } from 'react-device-detect'
import DiferencialApps from '../components/DiferencialApps'
import Div1Apps from '../components/Div1Apps'
import Footer from '../components/Footer'
import OrcamentoApps from '../components/OrcamentoApps'
import styles from '../style'
import { useEffect } from 'react';

const Aplicativos = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
                <DiferencialApps/>
                <Footer/>
                <a target='_blank' href="https://wa.me/5513996237281?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!" className="float"/>

              </div>
            </div>
    
          </div>
    )
}

export default Aplicativos