import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { backgroundApps, bgDivApp, celulares3, imgDivSites } from '../assets'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import ModalContato from './ModalContato'


const Div1Apps = () => {

    const[modalOpen, setModalOpen] = useState(false);
    
    useEffect(() => {
        Aos.init({duration: 1000});
    })

    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div-apps container' >
                </div>
                <div className='containter'>
                    <h1 className='conteudo-sites'>APPS LEVES E</h1>
                    <h1 className='conteudo-sites2'>DINÂMICOS!</h1>
                    <div className='div-celulares' data-aos="zoom-in">
                        <img className='background-celular' src={backgroundApps}/>
                        <img className='image-celular' src={celulares3}/>
                    </div>
                </div>
            </section>
          )
    } else {
        return (
            <section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>
                <img src={bgDivApp}></img>
                <div className='div-orcamento-web'>
                    <div className='card-orcamentos-web' data-aos="fade-up">
                        <h1 className='title-card-orcamentos-web'>QUER SABER EXATAMENTE QUANTO INVESTIR?</h1>
                        <p className='subtitle-card-orcamentos-web'>Vem bater um papo!</p>
                        <div className='buttons-card-orcamentos-web'>
                                <button className='button-card-orcamentos-web' onClick={()=>{setModalOpen(true)}}>CONTATO</button>
                        </div>
                    </div>
                </div>
                <ModalContato isOpen={modalOpen} setIsOpen={setModalOpen}/>
                <div className='bg-port-sites'>
                    <h1 className='blank'>.</h1>
                    <div className='div-celulares' data-aos="zoom-in">
                        <h1 className='blank5'>.</h1>
                    </div>
                    
                </div>
            </section>
          )
    }

}

export default Div1Apps