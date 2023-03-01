import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Diferencial = () => {


  useEffect(() => {
    Aos.init({duration: 2000});
  })

  if(isMobile){
    return (
      <section id="diferencial" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className='bg-div3 container' >
          <h1 className='title-div3'>POR QUE A LITTERA?</h1>
          <div data-aos="fade-left">
            <img className='image-diferencial' src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"></img>
            <div className='card-diferencial'>
              <div className='textbox-diferencial'>
                <p className='text-diferencial'>A Littera é composta por um time de profissionais experientes em diversos nichos dentro de TI, como foco na inovação de forma assertiva e segura, trabalhamos dia e noite com amor e dedicação para garantir os melhores resultados</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <img className='image-diferencial2' src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
            <div className='card-diferencial2'>
              <div className='textbox-diferencial2'>
                <p className='text-diferencial'>Nos prezamos pela qualidade e pela responsividade do seu site! Isso sem deixar de lado a segurança e modernidade tanto em layouts quanto em tecnologias.</p>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    )
  }
}

export default Diferencial