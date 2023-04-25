import React from 'react'
import Div1Sobre from '../components/Div1Sobre'
import CarroselTeamSobre from '../components/CarroselTeamSobre'
import Proposito from '../components/Proposito'
import Footer from '../components/Footer'
import styles from '../style'
import Historia from '../components/Historia'


const SobreNos = () => {
    return (
      <div className="bg w-full overflow-hidden">            
            {/* Div1 */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Div1Sobre/>
              </div>
            </div>
    
            {/* Body */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <CarroselTeamSobre />
                <Proposito />
                <Historia />
                <Footer />
              </div>
            </div>
    
          </div>
    )
    
}

export default SobreNos