import React from 'react'

import styles from '../style'

import { isMobile } from 'react-device-detect'
import { error } from '../assets'


const NoPage = () => {
    if(isMobile){
        return (
            <div className='bg w-full overflow-hidden'>
                <div className={`bg ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <img className="gif" src={error}></img>
                        <h1 className='title-error'>NADA POR AQUI, MELHOR VOLTAR.</h1>
                    </div>
                </div>
                <a href="https://wa.me/5513996237281?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!" className="float"/>
            </div>
          )
    } else {
        return (
        <div className='bg w-full overflow-hidden'>
            <div className={`bg ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <img className="gif-web" src={error}></img>
                    <h1 className='title-error-web'>NADA POR AQUI, MELHOR VOLTAR.</h1>
                </div>
                <a target='_blank' href="https://wa.me/5513996237281?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!" className="float"/>
            </div>
        </div>
    )
        
    }
}

export default NoPage