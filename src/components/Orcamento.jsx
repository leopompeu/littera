import React from 'react'
import { isMobile } from 'react-device-detect'
import { precos } from '../assets'

import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import ModalContato from './ModalContato'
import { useState } from 'react'


const Orcamento = () => {
    const[modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Aos.init({duration: 500});
    })

    if(isMobile){
        return (
            <section id="orcamento" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='div-orcamento'>
                    <img src={precos} className='precos' />
                    <div className='card-orcamentos' data-aos="flip-up">
                        <h1 className='title-card-orcamentos'>QUER SABER EXATAMENTE QUANTO INVESTIR?</h1>
                        <p className='subtitle-card-orcamentos'>Faça um pré orçamento ou entre em contato</p>
                        <div className='buttons-card-orcamentos'>
                            <button className='button-card-orcamentos' onClick={()=>{setModalOpen(true)}}>ORÇAMENTO</button>
                        </div>
                    </div>
                </div>
            </section>
          )
    } else {
        return (
            <section id="orcamento" className={`md:flex-row flex-col `}>
                <div className='div-orcamento-web'>
                    <div className='card-orcamentos-web' data-aos="flip-right">
                        <h1 className='title-card-orcamentos-web'>QUER SABER EXATAMENTE QUANTO INVESTIR?</h1>
                        <p className='subtitle-card-orcamentos-web'>Faça um pré orçamento ou entre em contato</p>
                        <div className='buttons-card-orcamentos-web'>
                                <button className='button-card-orcamentos-web' onClick={()=>{setModalOpen(true)}}>ORÇAMENTO</button>
                        </div>
                    </div>
                </div>
                <ModalContato isOpen={modalOpen} setIsOpen={setModalOpen}/>
            </section>
        )
    }

}

export default Orcamento