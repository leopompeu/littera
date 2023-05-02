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
                <a target='_blank' href="https://wa.me/5513996237281?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!" className="float"/>
              </div>
            </div>
    
          </div>
    )
    
}

export default SobreNos