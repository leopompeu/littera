import React from 'react'
import CarrouselServicos from './CarrouselServicos'

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

import { isMobile } from 'react-device-detect'

import styles from '../style'
import { card1web } from '../assets'

const Servicos = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  })

  if(isMobile) {
    return (
      <section id="servicos" className={`${styles.paddingX}`}>
        <div className='content-center' data-aos="fade-up">
          <h1 className='title-servicos'>O QUE PODEMOS SOLUCIONAR PARA VOCÊ?</h1>
          <CarrouselServicos ></CarrouselServicos>
        </div>
      </section>
    )
  } else {
    return (
      <section id="servicos" className={`${styles.paddingX}`}>
        <div className='content-center servicos-bg'>
          <h1 className='title-servicos-web'>O QUE PODEMOS SOLUCIONAR PARA</h1>
          <h1 className='title-servicos-web2'>VOCÊ?</h1>
          <img src={card1web} className="sticky-div"></img>
        </div>
      </section>
    )
  }
  
}

export default Servicos