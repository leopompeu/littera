import React from 'react'
import CarrouselServicos from './CarrouselServicos'

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

import { isMobile } from 'react-device-detect'

import styles from '../style'
import { card1web, card2web, card3web } from '../assets'
import { useNavigate } from 'react-router-dom'

const Servicos = () => {

  let navigate = useNavigate();

  const routeChangeSites = () =>{ 
    let path = `sites`; 
    navigate(path);
  }
  
  const routeChangeApps = () =>{ 
    let path = `aplicativos`; 
    navigate(path);
  }

  const routeChangeSeguranca = () =>{ 
    let path = `seguranca`; 
    navigate(path);
  }

  useEffect(() => {
    Aos.init({duration: 2000});
  })

  if(isMobile) {
    return (
      <section id="servicos" className={`${styles.paddingX}`}>
        <div className='content-center' data-aos="fade-up">
          <h1 className='title-servicos'>O QUE PODEMOS SOLUCIONAR</h1>
          <h1 className='title-servicos2'>SOLUCIONAR</h1>
          <h1 className='title-servicos3'>PARA VOCÊ?</h1>
          <CarrouselServicos/>
        </div>
      </section>
    )
  } else {
    return (
      <section id="servicos" className={`container-contac`}>
        <div className='bg-port-sites'>
          <h1>.</h1>
          <h1 className='title-servicos-web'>O QUE PODEMOS</h1>
          <h1 className='title-servicos-web2'>SOLUCIONAR</h1>
          <h1 className='title-servicos-web3'>PARA VOCÊ?</h1>
          <div data-aos="zoom-in" className='carousel-servicos-web-div'>
            <div className='card-servicos-first'>
              <div>
                  <h1 className='txt-carousel-servicos'>SITES</h1>
                  <h1 className='txt-carousel-servicos2'>RESPONSIVOS</h1>
                  <p className='text-carousel-servicos-descricao'>Impulsione seu negocio com sites modernos, dinâmicos, seguros e responsivos!</p>
                  <div  className='div-button-servicos'>
                      <button className="saiba-mais-button" onClick={routeChangeSites}>Saiba Mais</button>
                  </div>
              </div>
            </div>
            <div className='card-servicos3'>
              <div >
                  <h1 className='txt-carousel-servicos-middle'>APLICATIVOS</h1>
                  <p className='text-carousel-servicos-descricao-middle'>Automatize seu negócio ou divulgue ainda mais sua marca com aplicativos leves e modernos!</p>
                  <div  className='div-button-servicos'>
                      <button className="saiba-mais-button" onClick={routeChangeApps}>Saiba Mais</button>
                  </div>
              </div>
            </div>
            <div className='card-servicos2'>
              <div>
                  <h1 className='txt-carousel-servicos'>SEGURANÇA</h1>
                  <h1 className='txt-carousel-servicos2'>DIGITAL</h1>
                  <p className='text-carousel-servicos-descricao'>Garanta que você e seus clientes estão protegidos à ataques hacker ou treine seus funcionários para evitar golpes e fraudes!</p>
                  <div  className='div-button-servicos-last'>
                      <button className="saiba-mais-button" onClick={routeChangeSeguranca}>Saiba Mais</button>
                  </div>
              </div>
            </div>
          </div>
          <h1 className='blank2'>.</h1>
        </div>
      </section>
    )
  }
  
}

export default Servicos