import React from 'react'
import { isMobile } from 'react-device-detect'
import { precosApps } from '../assets'

import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"


const OrcamentoApps = () => {
    useEffect(() => {
        Aos.init({duration: 500});
    })

    if(isMobile){
        return (
            <section id="orcamento" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='div-orcamento'>
                    <img src={precosApps} className='precos'/>
                    <div className='card-orcamentos' data-aos="flip-up">
                        <h1 className='title-card-orcamentos'>QUER SABER EXATAMENTE QUANTO INVESTIR?</h1>
                        <p className='subtitle-card-orcamentos'>Faça um pré orçamento ou entre em contato</p>
                        <div className='buttons-card-orcamentos'>
                            <a href='/orcamentos'>
                                <button className='button-card-orcamentos'>ORÇAMENTO</button>
                            </a>
                                <button className='button-card-orcamentos '>CONTATO</button>
                        </div>
                    </div>
                </div>
            </section>
          )
    } else {
        return (
            <section id="orcamento" className={`md:flex-row flex-col`}>
                <div className='div-orcamento-web'>
                    <img src={precosApps} className='precos-web'/>
                    <div className='card-orcamentos-web' data-aos="flip-up">
                        <h1 className='title-card-orcamentos-web'>QUER SABER EXATAMENTE QUANTO INVESTIR?</h1>
                        <p className='subtitle-card-orcamentos-web'>Faça um pré orçamento ou entre em contato</p>
                        <div className='buttons-card-orcamentos-web'>
                            <a href='/orcamentos'>
                                <button className='button-card-orcamentos-web'>ORÇAMENTO</button>
                            </a>
                                <button className='button-card-orcamentos-web '>CONTATO</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default OrcamentoApps