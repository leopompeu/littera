import React from 'react'
import { isMobile } from 'react-device-detect'
import { image1Seguranca, image2Seguranca, imageDifSeguranca, imageDifSeguranca2 } from '../assets'

import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import ModalContato from './ModalContato'
import { disableBodyScroll } from 'body-scroll-lock'
import { useState } from 'react'


const DiferencialSeguranca = () => {

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
                <h2 className='title-diferencial-site'>POR QUE INVESTIR EM</h2>
                <h2 className='title-diferencial-site2'>SEGURANÇA?</h2>
                    <div className='cards-sites-mobile'>
                        <div className='row-cards-sites-mobile'>
                            <div className='div-card-sites-mobile trust-card-mobile'>
                                <h3 className='title-card-sites-mobile first-security'>CONFIDENCIALIDADE</h3>
                                <p className='text-card-sites-mobile'>Seja uma empresa em que se pode confiar! Garanta a seus clientes que seus dados estarão seguros.</p>
                            </div>
                            <div className='div-card-sites-mobile hacker-card-mobile'>
                                <h3 className='title-card-sites-mobile'>ATAQUES</h3>
                                <p className='text-card-sites-mobile'>Ataques hacker e golpes estão cada dia sendo mais comuns, evite sofrer algum ataque ou golpe, e conte conosco!</p>
                            </div> 
                        </div>
                        <div className='row-cards-sites-mobile'>
                        <div className='div-card-sites-mobile teaching-card-mobile'>
                                <h3 className='title-card-sites-mobile'>CAPACITAÇÃO</h3>
                                <p className='text-card-sites-mobile'>Capacite seus colaboradores para evitar riscos ou danos a segurança e a integridade da sua empresas!</p>
                            </div>
                            <div className='div-card-sites-mobile market-card-mobile'>
                                <h3 className='title-card-sites-mobile'>MERCADO</h3>
                                <p className='text-card-sites-mobile'>Segurança a informação é uma das áreas que mais cresce dentro de TI, seja pioneiro e invista na segurança do seu negócio!</p>
                            </div>
                        </div>
                        <div className='row-cards-sites-mobile'>
                            <div className='div-card-sites-mobile adjust-card-mobile'>
                                <h3 className='title-card-sites-mobile'>ADEQUAÇÃO</h3>
                                <p className='text-card-sites-mobile'>Adeque sua empresa a novas normas e leis referentes a dados pessoais na internet e evite problemas.</p>
                            </div>
                            <div className='div-card-sites-mobile saving-card-mobile'>
                                <h3 className='title-card-sites-mobile'>ECONÔMIA</h3>
                                <p className='text-card-sites-mobile'>Você sabia que se recuperar de um ataque hacker ou golpe é mais custoso do que investir em segurança? Por isso se precavenha e chama a Littera!</p>
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
                        <h2 className='title-diferencial-site-web'>POR QUE INVESTIR EM</h2>
                        <h2 className='title-diferencial-site-web2'>SEGURANÇA?</h2>
                        <div className='div-cards-sites'>
                            <div className='div-card-sites trust-card'>
                                <h3 className='title-card-sites'>CONFIDENCIALIDADE</h3>
                                <p className='text-card-sites'>Seja uma empresa em que se pode confiar! Garanta a seus clientes que seus dados estarão seguros.</p>
                            </div>
                            <div className='div-card-sites hacker-card'>
                                <h3 className='title-card-sites'>ATAQUES</h3>
                                <p className='text-card-sites'>Ataques hacker e golpes estão cada dia sendo mais comuns, evite sofrer algum ataque ou golpe, e conte conosco!</p>
                            </div> 
                            <div className='div-card-sites teaching-card'>
                                <h3 className='title-card-sites'>CAPACITAÇÃO</h3>
                                <p className='text-card-sites'>Capacite seus colaboradores para evitar riscos ou danos a segurança e a integridade da sua empresas!</p>
                            </div>
                        </div>
                        <div className='div-cards-sites'>
                            <div className='div-card-sites market-card'>
                                <h3 className='title-card-sites'>MERCADO</h3>
                                <p className='text-card-sites'>Segurança a informação é uma das áreas que mais cresce dentro de TI, seja pioneiro e invista na segurança do seu negócio!</p>
                            </div>
                            <div className='div-card-sites adjust-card'>
                                <h3 className='title-card-sites'>ADEQUAÇÃO</h3>
                                <p className='text-card-sites'>Adeque sua empresa a novas normas e leis referentes a dados pessoais na internet e evite problemas.</p>
                            </div>
                            <div className='div-card-sites saving-card'>
                                <h3 className='title-card-sites'>ECONÔMIA</h3>
                                <p className='text-card-sites'>Você sabia que se recuperar de um ataque hacker ou golpe é mais custoso do que investir em segurança? Por isso se precavenha e chama a Littera!</p>
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

export default DiferencialSeguranca