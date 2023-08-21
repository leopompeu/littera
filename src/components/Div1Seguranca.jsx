import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { backgroundDesktop, bgDivSeguranca, desktop, litteraArt } from '../assets'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import ModalContato from './ModalContato'
import DiferencialSeguranca from './DiferencialSeguranca'
import Footer from './Footer'


const Div1Seguranca = () => {

    const[modalOpen, setModalOpen] = useState(false);
    const [thisAnimation, setAnimation] = useState({animation: 'slide-open'})
    const [thisAnimation2, setAnimation2] = useState({animation: 'fade-in2'})

    useEffect(() => {
        Aos.init({duration: 1000});
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
                
                <DiferencialSeguranca/>
                <Footer/>
            </section>
          )
    } else {
        return (
            <section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>
                <img src={bgDivSeguranca}></img>
                <div className='div-orcamento-web'>
                    <div className='card-orcamentos-web' data-aos="fade-up">
                        <h1 className='title-card-orcamentos-web'>QUER SABER EXATAMENTE QUANTO INVESTIR?</h1>
                        <p className='subtitle-card-orcamentos-web'>Vem bater um papo!</p>
                        <div className='buttons-card-orcamentos-web'>
                                <button className='button-card-orcamentos-web' onClick={()=>{setModalOpen(true)}}>CONTATO</button>
                        </div>
                    </div>
                </div>
                <ModalContato isOpen={modalOpen} setIsOpen={setModalOpen}  thisAnimation={thisAnimation} setAnimation={setAnimation} thisAnimation2={thisAnimation2} setAnimation2={setAnimation2}/>
                <div className='bg-port-sites'>
                    <h1 className='blank'>.</h1>
                    <div className='container-animation-pages'>
                        <p className='text-animation-pages1 animation'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
                        <p className='text-animation-pages2 animation2'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA  LITTERA LITTERA LITTERA LITTERA  LITTERA LITTERA LITTERA LITTERA  LITTERA LITTERA LITTERA LITTERA  LITTERA LITTERA LITTERA LITTERA  LITTERA</p>
                        <p className='text-animation-pages1 animation'>LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA LITTERA</p>
                        <img src={litteraArt} className='art-littera'/>
                    </div>

                    <DiferencialSeguranca/>
                    <Footer/>

                    <div className='div-celulares' data-aos="zoom-in">
                        <h1 className='blank5'>.</h1>
                    </div>
                </div>
            </section>
          )
    }

}

export default Div1Seguranca