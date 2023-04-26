import React from 'react'
import { isMobile } from 'react-device-detect'
import { backgroundCelulares, celularesSites, down, bgDivSite, up } from '../assets'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Div1Sites = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    })
    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div-sites container' >
                </div>
                <div className='containter'>
                    <h1 className='conteudo-sites'>SITES MODERNOS E</h1>
                    <h1 className='conteudo-sites2'>REPONSIVOS!</h1>
                    <div className='div-celulares' data-aos="zoom-in">
                        <img className='background-celular' src={backgroundCelulares}/>
                        <img className='image-celular' src={celularesSites}/>
                    </div>
                </div>
            </section>
          )
    } else {
        return (
            <section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>
                <img src={bgDivSite}></img>
                <div className='bg-port-sites'>
                    <h1 className='blank'>.</h1>
                    <h1 className='conteudo-sites'>SITES MODERNOS E</h1>
                    <h1 className='conteudo-sites2-web'>REPONSIVOS!</h1>
                    <div className='div-celulares' data-aos="zoom-in">
                        <img className='background-celular' src={backgroundCelulares}/>
                        <img className='image-celular-sites' src={celularesSites}/>
                        <h1 className='blank5'>.</h1>
                    </div>
                    
                </div>
            </section>
          )
    }

}

export default Div1Sites