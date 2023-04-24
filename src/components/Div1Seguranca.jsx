import React from 'react'
import { isMobile } from 'react-device-detect'
import { backgroundDesktop, bgDivSeguranca, desktop } from '../assets'
import styles from '../style'

const Div1Seguranca = () => {
    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div-seguranca container' >
                </div>
                <div className='containter'>
                    <h1 className='conteudo-sites'>SEU NEGÓCIO MAIS</h1>
                    <h1 className='conteudo-sites2'>SEGURO!</h1>
                    <div className='div-celulares'>
                        <img className='background-celular' src={backgroundDesktop}/>
                        <img className='image-celular' src={desktop}/>
                    </div>
                </div>
            </section>
          )
    } else {
        return (
            <section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>

                
                <img src={bgDivSeguranca}></img>
                <div className='bg-port-sites'>
                    <h1 className='blank'>.</h1>
                    <h1 className='conteudo-sites'>SEU NEGÓCIO MAIS</h1>
                    <h1 className='conteudo-sites2-web'>SEGURO!</h1>
                    <div className='div-celulares'>
                        <img className='background-celular' src={backgroundDesktop}/>
                        <img className='image-celular-sites' src={desktop}/>
                        <h1 className='blank2'>.</h1>
                    </div>
                    
                </div>
            </section>
          )
    }

}

export default Div1Seguranca