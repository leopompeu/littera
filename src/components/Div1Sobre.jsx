import React from 'react'

import { isMobile } from 'react-device-detect'

import styles from '../style'

const Div1Sobre = () => {
    if(isMobile) {
        return (
          <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className='bg-div-home container' >
              <h1 className='title'>CONHEÇA NOSSA</h1>
              <h1 className='title-sobre-nos2-mobile'>EQUIPE!</h1>
            </div>
          </section>
            
          )
    } else {
        return (
            
        <section id="sobre" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className='bg-div-home-web' >
            <h1 className='title-web'>CONHEÇA NOSSA</h1>
            <h1 className='title-sobre-nos2'>EQUIPE!</h1>
          </div>
        </section>
          )
    }

}

export default Div1Sobre