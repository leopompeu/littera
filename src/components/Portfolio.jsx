import React from 'react'
import styles from '../style'

import { celulares, celulares2 } from '../assets'

import { isMobile } from 'react-device-detect'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Portfolio = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  })
  if(isMobile){
    return (
      <section id="diferencial" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

        <h1 className='text-portfolio'>VEJA ALGUNS DE NOSSOS TRABALHOS</h1>
        <div className='bg-div-fv'>
          <div data-aos="fade-left">
            <img src={celulares} className='image-fv' />
            <h1 className='text-fv'>FV Publicidades</h1>
          </div>
        </div>
        <div className='bg-div-solucionare'>
          <div data-aos="fade-right">
            <img src={celulares2} className='image-solucionare'/>
            <h1 className='text-solucionare'>Solucionare</h1>
          </div>
        </div>

      </section>
    )
  }

}

export default Portfolio