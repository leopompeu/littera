import React from 'react'
import CarrouselServicos from './CarrouselServicos'

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

import { isMobile } from 'react-device-detect'

import styles from '../style'
import { card1web, card2web, card3web } from '../assets'
import { useNavigate } from 'react-router-dom'
import ModalContato from './ModalContato'
import { useState } from 'react'
import { disableBodyScroll } from 'body-scroll-lock'
import Carousel from 'nuka-carousel/lib/carousel'

const Servicos = () => {

  const[modalOpen, setModalOpen] = useState(false);
  const [thisAnimation, setAnimation] = useState({animation: 'slide-open'})
  const [thisAnimation2, setAnimation2] = useState({animation: 'fade-in2'})


  let navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true)
    disableBodyScroll(document)
  }

/*   const routeChangeSites = () =>{ 
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
  } */

  useEffect(() => {
    Aos.init({duration: 2000});
  })

  if(isMobile) {
    return (
      <section id="servicos" className={`${styles.paddingX}`}>
        <div className='content-center' data-aos="fade-up">
          <h2 className='title-servicos'>O QUE PODEMOS</h2>
          <h2 className='title-servicos2'>SOLUCIONAR</h2>
          <h2 className='title-servicos3'>PARA VOCÊ?</h2>
          <div className='carousel' data-aos="fade-up">
                <Carousel 
                    autoplay= {true}
                    autoplayInterval = {3500}
                    wrapAround = {true}
                    defaultControlsConfig={{
                        pagingDotsStyle: {
                            marginRight: "15px",
                            position: 'relative',
                            top: '50px'
                        }
                    }}
                    className=".slider-control-bottomcenter button" 
                    renderCenterLeftControls={({ previousSlide }) => (
                        <div className='text-white cursor-pointer'>
                        
                        </div>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <div className='text-white cursor-pointer'>
                        
                        </div>
                )}>
                    <div className='card-servicos-first'>
                        <div className='center-card'>
                            <br/>
                            <h3 className='txt-carousel-servicos-mobile'>SITES</h3>
                            <h3 className='txt-carousel-servicos2'>RESPONSIVOS</h3>
                            <p className='text-carousel-servicos-descricao'>Desenvolvimento de sites para advogados, construtoras, escritórios e muito mais!</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button" onClick={()=>{setAnimation({animation: 'slide-open'});setAnimation2({animation: 'fade-in2'}); openModal()}}>Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-servicos3'>
                        <div className='center-card'>
                            <br/>
                            <h3 className='txt-carousel-servicos-middle-mobile'>APLICATIVOS</h3>
                            <p className='text-carousel-servicos-descricao-middle'>Criação de aplicativos para sua empresa! Focados em automação ou expansão de marca.</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button margin-neg" onClick={()=>{setAnimation({animation: 'slide-open'});setAnimation2({animation: 'fade-in2'}); openModal()}}>Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-servicos2'>
                        <div className='center-card'>
                            <br/>
                            <h3 className='txt-carousel-servicos-mobile'>SEGURANÇA</h3>
                            <h3 className='txt-carousel-servicos2'>DIGITAL</h3>
                            <p className='text-carousel-servicos-descricao'>Segurança da informação para sua empresa. Proteja seu negócio de ataques, golpes e fraudes!</p>
                            <div  className='div-button-servicos-last'>
                                <button className="saiba-mais-button" onClick={()=>{setAnimation({animation: 'slide-open'});setAnimation2({animation: 'fade-in2'}); openModal()}}>Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
        <ModalContato isOpen={modalOpen} setIsOpen={setModalOpen} thisAnimation={thisAnimation} setAnimation={setAnimation} thisAnimation2={thisAnimation2} setAnimation2={setAnimation2}/>
      </section>
    )
  } else {
    return (
      <section id="servicos" className={`container-contac`}>
        <div className={`${window.innerWidth >= 2000 ? 'bg-port-sites-big' : 'bg-port-sites'}`}>
          <p>.</p>
          <h2 className='title-servicos-web'>SOLUÇÕES PARA </h2>
          <h2 className='title-servicos-web2'>SUA EMPRESA!</h2>
          <div data-aos="zoom-in" className={`${window.innerWidth >= 2000 ? 'carousel-servicos-web-div-big' : 'carousel-servicos-web-div'}`}>
            <div className='card-servicos-first'>
              <div className='content-card-sevicos'>
                  <h3 className='txt-carousel-servicos'>SITES</h3>
                  <h3 className='txt-carousel-servicos2'>RESPONSIVOS</h3>
                  <p className='text-carousel-servicos-descricao'>Desenvolvimento de sites para advogados, construtoras, escritórios e muito mais!</p>
                  <div  className='div-button-servicos-last'>
                      <button className="saiba-mais-button" onClick={()=>{setAnimation({animation: 'slide-open'});setAnimation2({animation: 'fade-in2'}); openModal()}} >Saiba Mais</button>
                  </div>
              </div>
            </div>
            <div className='card-servicos3'>
              <div className='content-card-sevicos'>
                  <h3 className='txt-carousel-servicos-middle'>APLICATIVOS</h3>
                  <p className='text-carousel-servicos-descricao-middle'>Criação de aplicativos para sua empresa! Focados em automação ou expansão de marca.</p>
                  <div  className='div-button-servicos'>
                      <button className="saiba-mais-button" onClick={()=>{setAnimation({animation: 'slide-open'});setAnimation2({animation: 'fade-in2'}); openModal()}} >Saiba Mais</button>
                  </div>
              </div>
            </div>
            <div className='card-servicos2'>
              <div className='content-card-sevicos' >
                  <h3 className='txt-carousel-servicos'>SEGURANÇA</h3>
                  <h3 className='txt-carousel-servicos2'>DIGITAL</h3>
                  <p className='text-carousel-servicos-descricao'>Segurança da informação para sua empresa. Proteja seu negócio de ataques, golpes e fraudes!</p>
                  <div  className='div-button-servicos-last'>
                      <button className="saiba-mais-button" onClick={()=>{setAnimation({animation: 'slide-open'});setAnimation2({animation: 'fade-in2'}); openModal()}} >Saiba Mais</button>
                  </div>
              </div>
            </div>
          </div>
          <p className='blank2'>.</p>
        </div>
        <ModalContato isOpen={modalOpen} setIsOpen={setModalOpen} thisAnimation={thisAnimation} setAnimation={setAnimation} thisAnimation2={thisAnimation2} setAnimation2={setAnimation2}/>
      </section>
    )
  }
  
}

export default Servicos