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
                <Orcamento/>
                <DiferencialSites/>
                <Footer/>
              </div>
            </div>
          </div>
    )
}

export default Sites