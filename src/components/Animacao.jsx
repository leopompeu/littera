import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'

import { celulares, celulares2 } from '../assets'

const Animacao = () => {
  if(isMobile){
    return (
      <section id="diferencial" className={`flex md:flex-row flex-col ${styles.paddingY} section-animation-mobile`}>
        <div className='animation-container'>
          <p className='text-animation animation2'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA </p>
        </div>
        <div className='animation-container2'>
          <p className='text-animation2 animation'>CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO </p>
        </div>        
      </section>
    )
  } else {
    return(
      <section id="diferencial" className={`flex flex-col section-animation`}>
        <div className='animation-container'>
          <p className='text-animation animation2'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA </p>
        </div>
        <div className='animation-container2'>
          <p className='text-animation2 animation'>CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO </p>
        </div>        
      </section>
    )
  }
}

export default Animacao