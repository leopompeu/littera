import React from 'react'
import { isMobile } from 'react-device-detect'
import { image1, image2, imgDif1, imgDif2 } from '../assets'

import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"


const DiferencialSites = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    })

    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div3-sites container' >
                    <h1 className='title-diferencial-site'>POR QUE FAZER UM</h1>
                    <h1 className='title-diferencial-site2'>SITE?</h1>
                    <div className='text-div'>
                        <img className='image1-text' src={image1} data-aos="flip-right"/>
                        <p className='text-diferencial-site'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem at leo placerat auctor. Nullam suscipit augue sit amet ligula varius, sodales finibus orci mollis. Cras venenatis imperdiet consequat. Nulla eget vehicula eros. Vivamus dapibus faucibus nunc, vel finibus lacus condimentum ultricies. Nulla justo nibh, semper eu urna ac, finibus suscipit magna.</p>
                    </div>
                    <div className='text-div2'>
                        <p className='text-diferencial-site2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem at leo placerat auctor. Nullam suscipit augue sit amet ligula varius, sodales finibus orci mollis. Cras venenatis imperdiet consequat. Nulla eget vehicula eros. Vivamus dapibus faucibus nunc, vel finibus lacus condimentum ultricies. Nulla justo nibh, semper eu urna ac, finibus suscipit magna.</p>
                        <img className='image1-text2' src={image2} data-aos="flip-left"/>
                    </div>
                </div>
            </section>
          )
    } else {
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div3-sites-web' >
                    <h1 className='title-diferencial-site-web'>POR QUE FAZER UM</h1>
                    <h1 className='title-diferencial-site-web2'>SITE?</h1>
                    <div className='diferencial-cards'>
                        <div className='card-diferencial-site' data-aos="fade-up">
                            <img src={imgDif1}/>
                            <h1 className='title-dif'>TIME ESPECIALIZADO</h1>
                            <p className='content-dif'>A Littera é composta por um time de profissionais experientes em diversos nichos dentro de TI, como foco na inovação de forma assertiva e segura, trabalhamos dia e noite com amor e dedicação a cada cliente individualmente para garantir os melhores resultados.</p>
                        </div>
                        <div className='card-diferencial-site' data-aos="fade-up">
                            <img src={imgDif2}/>
                            <h1 className='title-dif'>TIME ESPECIALIZADO</h1>
                            <p className='content-dif'>A Littera é composta por um time de profissionais experientes em diversos nichos dentro de TI, como foco na inovação de forma assertiva e segura, trabalhamos dia e noite com amor e dedicação a cada cliente individualmente para garantir os melhores resultados.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
          )
    }
}

export default DiferencialSites