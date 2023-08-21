import React from 'react'
import { isMobile } from 'react-device-detect'
import { backgroundCelulares, celularesSites, down, bgDivSite, up, litteraArt } from '../assets'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useState } from 'react'
import ModalContato from './ModalContato'
import DiferencialSites from './DiferencialSites'
import Footer from './Footer'
import { disableBodyScroll } from 'body-scroll-lock'

const Div1Sites = () => {
    const[modalOpen, setModalOpen] = useState(false);
    const [thisAnimation, setAnimation] = useState({animation: 'slide-open'})
    const [thisAnimation2, setAnimation2] = useState({animation: 'fade-in2'})

    const openModal = () => {
        setModalOpen(true)
        disableBodyScroll(document)
    }
  
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        Aos.init({duration: 2000});
    })
    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div-sites container' >
                </div>
                <div className='animation-mobile-sites'>
                    <p className='text-animation-pages1-mobile animation'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
                    <p className='text-animation-pages2-mobile animation2'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
                    <img src={litteraArt} className='art-littera-mobile'/>
                    <p className='text-animation-pages1-mobile animation'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
                </div>
                
                <DiferencialSites/>
                <Footer/>

            </section>
          )
    } else {
        return (
            <section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>
                <img src={bgDivSite}></img>
                <div className='div-orcamento-web'>
                    <div className='card-orcamentos-web' data-aos="fade-up">
                        <h2 className='title-card-orcamentos-web'>QUER SABER EXATAMENTE QUANTO INVESTIR?</h2>
                        <p className='subtitle-card-orcamentos-web'>Vem bater um papo!</p>
                        <div className='buttons-card-orcamentos-web'>
                                <button className='button-card-orcamentos-web' onClick={()=>{setAnimation({animation: 'slide-open'});setAnimation2({animation: 'fade-in2'}); openModal()}}>CONTATO</button>
                        </div>
                    </div>
                </div>
                <ModalContato isOpen={modalOpen} setIsOpen={setModalOpen} thisAnimation={thisAnimation} setAnimation={setAnimation} thisAnimation2={thisAnimation2} setAnimation2={setAnimation2}/>
                <div className='bg-port-sites'>
                    <p className='blank'>.</p>
                    <div className='container-animation-pages'>
                        <p className='text-animation-pages1 animation'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
                        <p className='text-animation-pages2 animation2'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA  LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
                        <p className='text-animation-pages1 animation'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
                        <img src={litteraArt} className='art-littera'/>
                    </div>
                    <DiferencialSites/>
                    <Footer/>

                    <div className='div-celulares' data-aos="zoom-in">
                        <p className='blank5'>.</p>
                    </div>
                </div>
            </section>
          )
    }

}

export default Div1Sites