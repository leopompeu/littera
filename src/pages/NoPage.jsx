import React from 'react'

import styles from '../style'

import { isMobile } from 'react-device-detect'
import {error} from "../assets"

const NoPage = () => {
    if(isMobile){
        return (
            <div className='bg w-full overflow-hidden'>
                <div className={`bg ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <iframe className='gif' src="https://embed.lottiefiles.com/animation/64166"></iframe>
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
                    <iframe className='gif-web' src="https://embed.lottiefiles.com/animation/64166"></iframe>
                    <h1 className='title-error-web'>NADA POR AQUI, MELHOR VOLTAR.</h1>
                </div>
            </div>
        </div>
    )
        
    }
}

export default NoPage