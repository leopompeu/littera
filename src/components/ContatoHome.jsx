import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import Contato from './Contato'
import Footer from './Footer'


const ContatoHome = () => {

  if(isMobile){
    return (
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className='footer'>
          <Contato data-aos="fade-up"/>
          <Footer/>
        </div>
      </section>
    )
  }
  
}

export default ContatoHome