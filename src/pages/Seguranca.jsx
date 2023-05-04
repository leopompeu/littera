import React from 'react'

import { isMobile } from 'react-device-detect'
import DiferencialSeguranca from '../components/DiferencialSeguranca'
import Div1Seguranca from '../components/Div1Seguranca'
import Footer from '../components/Footer'
import OrcamentoSeguranca from '../components/OrcamentoSeguranca'
import styles from '../style'
import { useEffect } from 'react';

const Seguranca = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
                <Footer/>
                <a href="https://wa.me/5513996237281?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!" className="float" target='_blank'/>
              </div>
            </div>
    
          </div>
    )
}

export default Seguranca