import React from 'react'

import styles from '../style'

import { isMobile } from 'react-device-detect'

const NoPage = () => {
    if(isMobile){
        return (
            <div className='bg w-full overflow-hidden'>
                <div className={`bg ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <h1 className='title'>FILHA DA PUTA BURRO, ISSO NAO EXISTE!</h1>
                    </div>
                </div>
            </div>
          )
    } else {
        
    }
}

export default NoPage