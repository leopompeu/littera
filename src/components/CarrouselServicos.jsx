import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'
import { isMobile } from 'react-device-detect'
import { card1, card1web, card2web, card3web, card2, card3 } from '../assets'
import { Carousel as CarouselWeb } from 'react-bootstrap'
import styles from '../style'
import { useNavigate } from 'react-router-dom'


function CardServicos() {
    
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

    if(isMobile){
        return (
            <div className='content-center carousel' data-aos="fade-up">
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
                    <div className='card-servicos-first-mobile'>
                        <div>
                            <br/>
                            <h1 className='txt-carousel-servicos-mobile'>SITES</h1>
                            <h1 className='txt-carousel-servicos2'>RESPONSIVOS</h1>
                            <p className='text-carousel-servicos-descricao'>Impulsione seu negocio com sites modernos, dinâmicos, seguros e responsivos!</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button" onClick={routeChangeSites}>Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-servicos3-mobile'>
                        <div >
                            <br/>
                            <h1 className='txt-carousel-servicos-middle-mobile'>APLICATIVOS</h1>
                            <p className='text-carousel-servicos-descricao-middle'>Automatize seu negócio ou divulgue ainda mais sua marca com aplicativos leves e modernos!</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button" onClick={routeChangeApps}>Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-servicos2-mobile'>
                        <div>
                            <br/>
                            <h1 className='txt-carousel-servicos-mobile'>SEGURANÇA</h1>
                            <h1 className='txt-carousel-servicos2'>DIGITAL</h1>
                            <p className='text-carousel-servicos-descricao'>Garanta que você e seus clientes estão protegidos à ataques hacker ou treine seus funcionários para evitar golpes e fraudes!</p>
                            <div  className='div-button-servicos-last'>
                                <button className="saiba-mais-button" onClick={routeChangeSeguranca}>Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    } else {
        return(
            <section id="carousel-servicos" className={`flex flex-col`}>
                <CarouselWeb className='carousel-web'>
                    <CarouselWeb.Item> 
                        <img src={card1web} className='div-carousel-servicos-item'/>
                        <div>
                            <h1 className='txt-carousel-servicos'>Sites responsivos</h1>
                            <p className='text-carousel-servicos-descricao'>Impulsione seu negocio com sites modernos, dinâmicos, seguros e responsivos!</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button">Saiba Mais</button>
                            </div>
                        </div>
                    </CarouselWeb.Item>
                    <CarouselWeb.Item> 
                        <img src={card2web} className='div-carousel-servicos-item'/>
                        <div>
                            <h1 className='txt-carousel-servicos'>Segurança digital</h1>
                            <p className='text-carousel-servicos-descricao'>Garanta que você e seus clientes estão protegidos à ataques hacker ou treine seus funcionários para evitar golpes e fraudes!</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button">Saiba Mais</button>
                            </div>
                        </div>
                    </CarouselWeb.Item>
                    <CarouselWeb.Item> 
                        <img src={card3web} className='div-carousel-servicos-item'/>
                        <div>
                            <h1 className='txt-carousel-servicos'>Aplicativos</h1>
                            <p className='text-carousel-servicos-descricao'>Automatize seu negócio ou divulgue ainda mais sua marca com aplicativos leves e modernos!</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button">Saiba Mais</button>
                            </div>
                        </div>
                    </CarouselWeb.Item>
                </CarouselWeb>
            </section>
        )
        
    }
}
  

export default CardServicos