import React from 'react'
import { isMobile } from 'react-device-detect'
import { backgroundApps, celulares3, imgDivSites } from '../assets'
import styles from '../style'

const Div1Apps = () => {
    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div-apps container' >
                </div>
                <div className='containter'>
                    <h1 className='conteudo-sites'>APPS LEVES E</h1>
                    <h1 className='conteudo-sites2'>DINÂMICOS!</h1>
                    <div className='div-celulares'>
                        <img className='background-celular' src={backgroundApps}/>
                        <img className='image-celular' src={celulares3}/>
                    </div>
                </div>
            </section>
          )
    } else {
        return (
            <section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>

                
                <div className='bg-div-apps-web' >
                    <h1>ESTILO</h1>
                </div>
                <div className='bg-port-sites'>
                    <h1 className='blank'>.</h1>
                    <h1 className='conteudo-sites'>APPS LEVES E</h1>
                    <h1 className='conteudo-apps2-web'>DINÂMICOS!</h1>
                    <div className='div-celulares'>
                        <img className='background-celular' src={backgroundApps}/>
                        <img className='image-celular-sites' src={celulares3}/>
                        <h1 className='blank2'>.</h1>
                    </div>
                    
                </div>
            </section>
          )
    }

}

export default Div1Apps