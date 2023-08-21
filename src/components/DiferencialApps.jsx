import React from 'react'
import { isMobile } from 'react-device-detect'
import { image1, image1Apps, image2, image2Apps, imgDif1, imgDif2, imgDifapps, imgDifapps2 } from '../assets'

import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { disableBodyScroll } from 'body-scroll-lock'
import ModalContato from './ModalContato'
import { useState } from 'react'

const DiferencialApps = () => {
    
    const[modalOpen, setModalOpen] = useState(false);
    const [thisAnimation, setAnimation] = useState({animation: 'slide-open'})
    const [thisAnimation2, setAnimation2] = useState({animation: 'fade-in2'})

    const openModal = () => {
        setModalOpen(true)
        disableBodyScroll(document)
      }

    useEffect(() => {
        Aos.init({duration: 2000});
      })

    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div3-sites container' >
                    <h2 className='title-diferencial-site'>POR QUE FAZER UM</h2>
                    <h2 className='title-diferencial-site2'>APP?</h2>
                    <div className='cards-sites-mobile'>
                        <div className='row-cards-sites-mobile'>
                            <div className='div-card-sites-mobile expansion-card-mobile'>
                                <h3 className='title-card-sites-mobile'>EXPANSÃO</h3>
                                <p className='text-card-sites-mobile'>Expanda sua marca e engaje seu publico com nossos apps. De um passo além dos seus concorrentes!</p>
                            </div>
                            <div className='div-card-sites-mobile automation-card-mobile'>
                                <h3 className='title-card-sites-mobile'>AUTOMAÇÃO</h3>
                                <p className='text-card-sites-mobile'>Automatize processos e facilite o controle dos mesmos para você e seus colaboradores ou clientes!</p>
                            </div> 
                        </div>
                        <div className='row-cards-sites-mobile'>
                            <div className='div-card-sites-mobile app-security-card-mobile'>
                                <h3 className='title-card-sites-mobile'>SEGURANÇA</h3>
                                <p className='text-card-sites-mobile'>Aplicativos seguros para garantir a integridade de seus projetos e da sua empresa. Testado em todas as etapas de produção.</p>
                            </div>
                            <div className='div-card-sites-mobile results-card-mobile'>
                                <h3 className='title-card-sites-mobile'>TENDÊNCIA</h3>
                                <p className='text-card-sites-mobile'>O mundo hoje está na palma da sua mão, leve sua empresa para onde as pessoas mais olham!</p>
                            </div>
                        </div>
                        <div className='row-cards-sites-mobile'>
                            <div className='div-card-sites-mobile economic-card-mobile'>
                                <h3 className='title-card-sites-mobile'>ECONÔMICO</h3>
                                <p className='text-card-sites-mobile'>Aplicativos com preço abaixo do mercado, condições especiais por tempo limitado. Seu app bonito, leve e barato!</p>
                            </div>
                            <div className='div-card-sites-mobile revenue-card-mobile'>
                                <h3 className='title-card-sites-mobile'>RETORNO</h3>
                                <p className='text-card-sites-mobile'>Capitalize em cima de seu aplicativo com anuncios e gerando ainda mais renda!</p>
                            </div>
                        </div>
                    </div>
                    <button className='button-sites-mobile' onClick={()=>{setAnimation({animation: 'slide-open'});setAnimation2({animation: 'fade-in2'}); openModal()}}>SAIBA MAIS</button>
                </div>
                <ModalContato    isOpen={modalOpen} setIsOpen={setModalOpen} thisAnimation={thisAnimation} setAnimation={setAnimation} thisAnimation2={thisAnimation2} setAnimation2={setAnimation2}/>
            </section>
          )
    } else {
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div3-sites-web' >
                    <div className='diferencial-cards'>
                        <h2 className='title-diferencial-site-web'>POR QUE FAZER UM</h2>
                        <h2 className='title-diferencial-site-web2'>APP?</h2>
                        <div className='div-cards-sites'>
                            <div className='div-card-sites expansion-card'>
                                <h3 className='title-card-sites'>EXPANSÃO</h3>
                                <p className='text-card-sites'>Expanda sua marca e engaje seu publico com nossos apps. De um passo além dos seus concorrentes!</p>
                            </div>
                            <div className='div-card-sites automation-card'>
                                <h3 className='title-card-sites'>AUTOMAÇÃO</h3>
                                <p className='text-card-sites'>Automatize processos e facilite o controle dos mesmos para você e seus colaboradores ou clientes!</p>
                            </div> 
                            <div className='div-card-sites app-security-card'>
                                <h3 className='title-card-sites'>SEGURANÇA</h3>
                                <p className='text-card-sites'>Aplicativos seguros para garantir a integridade de seus projetos e da sua empresa. Testado em todas as etapas de produção.</p>
                            </div>
                        </div>
                        <div className='div-cards-sites'>
                            <div className='div-card-sites results-card'>
                                <h3 className='title-card-sites'>TENDÊNCIA</h3>
                                <p className='text-card-sites'>O mundo hoje está na palma da sua mão, leve sua empresa para onde as pessoas mais olham!</p>
                            </div>
                            <div className='div-card-sites economic-card'>
                                <h3 className='title-card-sites'>ECONÔMICO</h3>
                                <p className='text-card-sites'>Aplicativos com preço abaixo do mercado, condições especiais por tempo limitado. Seu app bonito, leve e barato!</p>
                            </div>
                            <div className='div-card-sites revenue-card'>
                                <h3 className='title-card-sites'>RETORNO</h3>
                                <p className='text-card-sites'>Capitalize em cima de seu aplicativo com anuncios e gerando ainda mais renda!</p>
                            </div>
                        </div>
                        <button className='button-sites' onClick={()=>{setAnimation({animation: 'slide-open'});setAnimation2({animation: 'fade-in2'}); openModal()}}>SAIBA MAIS</button>
                    </div>
                    <ModalContato    isOpen={modalOpen} setIsOpen={setModalOpen} thisAnimation={thisAnimation} setAnimation={setAnimation} thisAnimation2={thisAnimation2} setAnimation2={setAnimation2}/>
                    
                </div>
            </section>
          )
    }
}

export default DiferencialApps