import React from 'react'
import { isMobile } from 'react-device-detect'
import { precos } from '../assets'

import styles from '../style'

const Orcamento = () => {
    if(isMobile){
        return (
            <section id="orcamento" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='div-orcamento'>
                    <img src={precos} className='precos' />
                    <div className='card-orcamentos'>
                        <h1 className='title-card-orcamentos'>QUER SABER EXATAMENTE QUANTO INVESTIR?</h1>
                        <p className='subtitle-card-orcamentos'>Faça um pré orçamento ou entre em contato</p>
                        <div className='buttons-card-orcamentos'>
                            <a href='/orcamentos'>
                                <button className='button-card-orcamentos'>Orçamento</button>
                            </a>
                                <button className='button-card-orcamentos '>Contato</button>
                        </div>
                    </div>
                </div>
            </section>
          )
    }

}

export default Orcamento