import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'

import { celulares, celulares2 } from '../assets'

const Animacao2 = () => {
  if(isMobile){
    return (
      <section id="diferencial" className={`flex md:flex-row flex-col ${styles.paddingY} section-animation`}>
        <div className='animation-container'>
          <h1 className='text-animation animation2'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</h1>
        </div>
        <div className='animation-container2'>
          <h1 className='text-animation2 animation'>CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO </h1>
        </div>        
      </section>
    )
  } else {
    return(
      <section id="diferencial" className={`flex flex-col section-animation`}>
        <div className='animation-container2'>
          <h1 className='text-animation2 animation'>CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO </h1>
        </div> 
        <div className='animation-container'>
          <h1 className='text-animation animation2'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</h1>
        </div>       
      </section>
    )
  }
}

export default Animacao2