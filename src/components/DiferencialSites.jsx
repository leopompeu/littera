import React from 'react'
import { isMobile } from 'react-device-detect'
import { image1, image2, imgDif1, imgDif2, sistemas, sites } from '../assets'

import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useState } from 'react'
import ModalContato from './ModalContato'

import { disableBodyScroll } from 'body-scroll-lock'



const DiferencialSites = () => {

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
                    <h2 className='title-diferencial-site2'>SITE?</h2>
                    <div className='cards-sites-mobile'>
                        <div className='row-cards-sites-mobile'>
                            <div className='div-card-sites-mobile sistema-card-mobile'>
                                <h3 className='title-card-sites-mobile'>AUTOMAÇÃO</h3>
                                <p className='text-card-sites-mobile'>Automatizamos seu negócio com sistemas integrados para suas necessidades. Também realizamos integrações com sistemas de automação externos!</p>
                            </div>
                            <div className='div-card-sites-mobile sites-card-mobile'>
                                <h3 className='title-card-sites-mobile'>SITES</h3>
                                <p className='text-card-sites-mobile'>Criação de sites para construtoras, advogados, escritórios e muito mais. Seu site é sua apresentação. Comece a aparecer para o mundo digital!</p>
                            </div> 
                        </div>
                        <div className='row-cards-sites-mobile'>
                            <div className='div-card-sites-mobile security-card-mobile'>
                                <h3 className='title-card-sites-mobile'>SEGURANÇA</h3>
                                <p className='text-card-sites-mobile'>Segurança da informação é um dos nossos pilares, por isso nossos sistemas passam por um pente fino de segurança antes de qualquer lançamento e após o lançamento.</p>
                            </div>
                            <div className='div-card-sites-mobile seo-card-mobile'>
                                <h3 className='title-card-sites-mobile'>SEO</h3>
                                <p className='text-card-sites-mobile'>Alavanque seus resultado e lidere nas pesquisas do google. Nossos especialista irão realizar um trabalho dedicado a SEO para seu negócio liderar nas pesquisas do google.</p>
                            </div>
                        </div>
                        <div className='row-cards-sites-mobile'>
                            <div className='div-card-sites-mobile apps-card-mobile'>
                                <h3 className='title-card-sites-mobile'>MOBILE</h3>
                                <p className='text-card-sites-mobile'>Respeitamos a metodologia "Mobile First" e por isso garantimos excelente funcionamento em dispositivo mobile, com design adaptado e moderno para celulares.</p>
                            </div>
                            <div className='div-card-sites-mobile response-card-mobile'>
                                <h3 className='title-card-sites-mobile'>RESPONSIVIDADE</h3>
                                <p className='text-card-sites-mobile'>Seu site em todas as telas, com nosso foco em responsividade não importa aonde seu site seja visto, ele sempre estará adaptado!</p>
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
                        <h2 className='title-diferencial-site-web2'>SITE?</h2>
                        <div className='div-cards-sites'>
                            <div className='div-card-sites sistema-card'>
                                <h3 className='title-card-sites'>AUTOMAÇÃO</h3>
                                <p className='text-card-sites'>Automatizamos seu negócio com sistemas integrados para suas necessidades. Também realizamos integrações com sistemas de automação externos!</p>
                            </div>
                            <div className='div-card-sites sites-card'>
                                <h3 className='title-card-sites'>SITES</h3>
                                <p className='text-card-sites'>Criação de sites para construtoras, advogados, escritórios e muito mais. Seu site é sua apresentação. Comece a aparecer para o mundo digital!</p>
                            </div> 
                            <div className='div-card-sites security-card'>
                                <h3 className='title-card-sites'>SEGURANÇA</h3>
                                <p className='text-card-sites'>Segurança da informação é um dos nossos pilares, por isso nossos sistemas passam por um pente fino de segurança antes de qualquer lançamento e após o lançamento.</p>
                            </div>
                        </div>
                        <div className='div-cards-sites'>
                            <div className='div-card-sites seo-card'>
                                <h3 className='title-card-sites'>SEO</h3>
                                <p className='text-card-sites'>Alavanque seus resultado e lidere nas pesquisas do google. Nossos especialista irão realizar um trabalho dedicado a SEO para seu negócio liderar nas pesquisas do google.</p>
                            </div>
                            <div className='div-card-sites apps-card'>
                                <h3 className='title-card-sites'>MOBILE</h3>
                                <p className='text-card-sites'>Respeitamos a metodologia "Mobile First" e por isso garantimos excelente funcionamento em dispositivo mobile, com design adaptado e moderno para celulares.</p>
                            </div>
                            <div className='div-card-sites response-card'>
                                <h3 className='title-card-sites'>RESPONSIVIDADE</h3>
                                <p className='text-card-sites'>Seu site em todas as telas, com nosso foco em responsividade não importa aonde seu site seja visto, ele sempre estará adaptado!</p>
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

export default DiferencialSites