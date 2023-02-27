import React from 'react'
import CarrouselServicos from './CarrouselServicos'

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

import styles from '../style'

const Servicos = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  })

  return (
    <section id="servicos" className={`${styles.paddingX}`}>
      <div className='content-center' data-aos="fade-up">
        <h1 className='title-servicos'>O QUE PODEMOS SOLUCIONAR PARA VOCÊ?</h1>
        <CarrouselServicos ></CarrouselServicos>
      </div>
    </section>
  )
}

export default Servicos