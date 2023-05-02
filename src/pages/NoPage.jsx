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
            </div>
        </div>
    )
        
    }
}

export default NoPage