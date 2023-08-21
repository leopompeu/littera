import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'

import { celulares, celulares2 } from '../assets'

const Animacao2 = () => {
  if(isMobile){
    return (
      <section id="diferencial" className={`flex md:flex-row flex-col ${styles.paddingY} section-animation-mobile`}>
        <div className='animation-container'>
          <p className='text-animation animation2'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
        </div>
        <div className='animation-container2'>
          <p className='text-animation2 animation'>CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO </p>
        </div>        
      </section>
    )
  } else {
    return(
      <section id="diferencial" className={`flex flex-col ${window.innerWidth >= 2000 && !isMobile ? 'section-animation2-big-big' : 'section-animation2'} ${window.innerWidth >= 1330 && !isMobile ? 'section-animation2-big' : 'section-animation2'}`}>
        <div className='animation-container2'>
          <p className='text-animation2 animation'>CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO CONECTE-SE AO SEU FUTURO </p>
        </div> 
        <div className='animation-container'>
          <p className='text-animation animation2'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
        </div>       
      </section>
    )
  }
}

export default Animacao2