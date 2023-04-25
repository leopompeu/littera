import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import { annaCarousel, batataCarousel, budaCarousel, kauan, kauanCarousel, leoCarousel, serjoCarousel, thomasCarousel, tiaoCarousel } from '../assets'


const CarroselTeamSobre = () => {

    if(isMobile) {
        return (
            <div>Div1Sobre</div>
          )
    } else {
        return (
            <section id="carousel-sobre" className={`flex flex-col ${styles.paddingY}`}>
                <Carousel>
                    <Carousel.Item> 
                        <div className='div-carousel-item'>
                            <img className='img-carousel' src={leoCarousel}/>
                            <div>
                                <h1 className='txt-carousel1'>Léo Pompeu</h1>
                                <div className='div-infos'>
                                    <div> 
                                        <h1 className='txt-carousel'>Função:</h1>
                                        <h1 className='txt-carousel'>Filme/Série favorito:</h1>
                                        <h1 className='txt-carousel'>Hobbie:</h1>
                                        <h1 className='txt-carousel'>Time do Coração:</h1>
                                    </div>
                                    <div className='div-item-infos'> 
                                        <h1 className='txt-carousel'>CEO</h1>
                                        <h1 className='txt-carousel'>Breaking Bad</h1>
                                        <h1 className='txt-carousel'>Música</h1>
                                        <h1 className='txt-carousel'>São Paulo</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='div-carousel-item'>
                            <img className='img-carousel' src={thomasCarousel}/>
                            <div>
                                <h1 className='txt-carousel1'>Thomas Verdam</h1>
                                <div className='div-infos'>
                                    <div> 
                                        <h1 className='txt-carousel'>Função:</h1>
                                        <h1 className='txt-carousel'>Filme/Série favorito:</h1>
                                        <h1 className='txt-carousel'>Hobbie:</h1>
                                        <h1 className='txt-carousel'>Time do Coração:</h1>
                                    </div>
                                    <div className='div-item-infos'> 
                                        <h1 className='txt-carousel'>Head de UI/UX</h1>
                                        <h1 className='txt-carousel'>Breaking Bad</h1>
                                        <h1 className='txt-carousel'>Platinar jogos</h1>
                                        <h1 className='txt-carousel'>Vasco</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='div-carousel-item'>
                            <img className='img-carousel' src={budaCarousel}/>
                            <div>
                                <h1 className='txt-carousel1'>Bruno Pereira Tyba</h1>
                                <div className='div-infos'>
                                    <div> 
                                        <h1 className='txt-carousel'>Função:</h1>
                                        <h1 className='txt-carousel'>Filme/Série favorito:</h1>
                                        <h1 className='txt-carousel'>Hobbie:</h1>
                                        <h1 className='txt-carousel'>Time do Coração:</h1>
                                    </div>
                                    <div className='div-item-infos'> 
                                        <h1 className='txt-carousel'>CPO</h1>
                                        <h1 className='txt-carousel'>Interestelar</h1>
                                        <h1 className='txt-carousel'>Livros e jogos</h1>
                                        <h1 className='txt-carousel'>Palmeiras</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='div-carousel-item'>
                            <img className='img-carousel' src={batataCarousel}/>
                            <div>
                                <h1 className='txt-carousel1'>Victor Hugo Ferrari</h1>
                                <div className='div-infos'>
                                    <div> 
                                        <h1 className='txt-carousel'>Função:</h1>
                                        <h1 className='txt-carousel'>Filme/Série favorito:</h1>
                                        <h1 className='txt-carousel'>Hobbie:</h1>
                                        <h1 className='txt-carousel'>Time do Coração:</h1>
                                    </div>
                                    <div className='div-item-infos'> 
                                        <h1 className='txt-carousel'>Head de marketing</h1>
                                        <h1 className='txt-carousel'>Simpsons</h1>
                                        <h1 className='txt-carousel'>Religião</h1>
                                        <h1 className='txt-carousel'>Palmeiras</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='div-carousel-item'>
                            <img className='img-carousel' src={annaCarousel}/>
                            <div>
                                <h1 className='txt-carousel1'>Anna Julia Vieira</h1>
                                <div className='div-infos'>
                                    <div> 
                                        <h1 className='txt-carousel'>Função:</h1>
                                        <h1 className='txt-carousel'>Filme/Série favorito:</h1>
                                        <h1 className='txt-carousel'>Hobbie:</h1>
                                        <h1 className='txt-carousel'>Time do Coração:</h1>
                                    </div>
                                    <div className='div-item-infos'> 
                                        <h1 className='txt-carousel'>Head de Vendas</h1>
                                        <h1 className='txt-carousel'>Grey's Anatomy</h1>
                                        <h1 className='txt-carousel'>Ler livros</h1>
                                        <h1 className='txt-carousel'>Corinthians</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='div-carousel-item'>
                            <img className='img-carousel' src={serjoCarousel}/>
                            <div>
                                <h1 className='txt-carousel1'>Sergio Henrique Gonçalves</h1>
                                <div className='div-infos'>
                                    <div> 
                                        <h1 className='txt-carousel'>Função:</h1>
                                        <h1 className='txt-carousel'>Filme/Série favorito:</h1>
                                        <h1 className='txt-carousel'>Hobbie:</h1>
                                        <h1 className='txt-carousel'>Time do Coração:</h1>
                                    </div>
                                    <div className='div-item-infos'> 
                                        <h1 className='txt-carousel'>UI/UX</h1>
                                        <h1 className='txt-carousel'>Peaky Blinders</h1>
                                        <h1 className='txt-carousel'>Happy Hour</h1>
                                        <h1 className='txt-carousel'>Santos</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='div-carousel-item'>
                            <img className='img-carousel' src={tiaoCarousel}/>
                            <div>
                                <h1 className='txt-carousel1'>Gianluca Gazzarini</h1>
                                <div className='div-infos'>
                                    <div> 
                                        <h1 className='txt-carousel'>Função:</h1>
                                        <h1 className='txt-carousel'>Filme/Série favorito:</h1>
                                        <h1 className='txt-carousel'>Hobbie:</h1>
                                        <h1 className='txt-carousel'>Time do Coração:</h1>
                                    </div>
                                    <div className='div-item-infos'> 
                                        <h1 className='txt-carousel'>Desenvolvedor Front-end</h1>
                                        <h1 className='txt-carousel'>Castelo Animado</h1>
                                        <h1 className='txt-carousel'>Skate</h1>
                                        <h1 className='txt-carousel'>Corinthians</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='div-carousel-item'>
                            <img className='img-carousel' src={kauanCarousel}/>
                            <div>
                                <h1 className='txt-carousel1'>Kauan Mennoci</h1>
                                <div className='div-infos'>
                                    <div> 
                                        <h1 className='txt-carousel'>Função:</h1>
                                        <h1 className='txt-carousel'>Filme/Série favorito:</h1>
                                        <h1 className='txt-carousel'>Hobbie:</h1>
                                        <h1 className='txt-carousel'>Time do Coração:</h1>
                                    </div>
                                    <div className='div-item-infos'> 
                                        <h1 className='txt-carousel'>Desenvolvedor Front-end</h1>
                                        <h1 className='txt-carousel'>Castelo Animado</h1>
                                        <h1 className='txt-carousel'>Futebol</h1>
                                        <h1 className='txt-carousel'>Corinthians</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
          )
    }
}

export default CarroselTeamSobre