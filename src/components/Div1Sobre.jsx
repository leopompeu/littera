import React from 'react'

import { isMobile } from 'react-device-detect'

import styles from '../style'

const Div1Sobre = () => {
    if(isMobile) {
        return (
            <div>Div1Sobre</div>
            
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