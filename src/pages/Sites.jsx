import React from 'react'

import { isMobile } from 'react-device-detect'
import DiferencialSites from '../components/DiferencialSites'
import Div1Sites from '../components/Div1Sites'
import Footer from '../components/Footer'
import Orcamento from '../components/Orcamento'
import styles from '../style'

const Sites = () => {
    return (
        <div className="bg w-full overflow-hidden">            
            {/* Div1Sites */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Div1Sites/>
              </div>
            </div>
            {/* Body */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <DiferencialSites/>
                <Footer/>
                <a href="https://wa.me/5513996237281?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!" className="float" target='_blank'/>
              </div>
            </div>
          </div>
    )
}

export default Sites