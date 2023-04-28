import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'
import { isMobile } from 'react-device-detect'
import { card1, card1web, card2web, card3web, card2, card3 } from '../assets'
import { Carousel as CarouselWeb } from 'react-bootstrap'
import styles from '../style'


function CardServicos() {
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
                            top: '60px'
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
                    <div>
                        <a href='/sites'>
                            <img className='images' src={ card1 } />
                        </a>
                    </div>
                    <div>
                        <a href='/aplicativos'>
                            <img className='images' src={ card2 } />
                        </a>
                    </div>
                    <div>
                        <a href='/seguranca'>
                            <img className='images' src={ card3 } />
                        </a>
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