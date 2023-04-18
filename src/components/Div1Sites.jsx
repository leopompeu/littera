import React from 'react'
import { isMobile } from 'react-device-detect'
import { backgroundCelulares, celularesSites, imgDivSites } from '../assets'
import styles from '../style'

const Div1Sites = () => {
    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div-sites container' >
                </div>
                <div className='containter'>
                    <h1 className='conteudo-sites'>SITES MODERNOS E</h1>
                    <h1 className='conteudo-sites2'>REPONSIVOS!</h1>
                    <div className='div-celulares'>
                        <img className='background-celular' src={backgroundCelulares}/>
                        <img className='image-celular' src={celularesSites}/>
                    </div>
                </div>
            </section>
          )
    } else {
        return (
            <section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>

                
                <div className='bg-div-sites-web' >
                    <h1>ESTILO</h1>
                </div>
                <div className='bg-port-sites'>
                    <h1 className='blank'>.</h1>
                    <h1 className='conteudo-sites'>SITES MODERNOS E</h1>
                    <h1 className='conteudo-sites2-web'>REPONSIVOS!</h1>
                    <div className='div-celulares'>
                        <img className='background-celular' src={backgroundCelulares}/>
                        <img className='image-celular-sites' src={celularesSites}/>
                        <h1 className='blank2'>.</h1>
                    </div>
                    
                </div>
            </section>
          )
    }

}

export default Div1Sites