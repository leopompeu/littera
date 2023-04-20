import React from 'react'
import { isMobile } from 'react-device-detect'
import { image1Seguranca, image2Seguranca, imageDifSeguranca, imageDifSeguranca2 } from '../assets'

import styles from '../style'

const DiferencialSeguranca = () => {
    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div3-sites container' >
                    <h1 className='title-diferencial-site'>POR QUE INVESTIR EM SEGURANÇA?</h1>
                    <div className='text-div'>
                        <img className='image1-text' src={image1Seguranca}/>
                        <p className='text-diferencial-site'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem at leo placerat auctor. Nullam suscipit augue sit amet ligula varius, sodales finibus orci mollis. Cras venenatis imperdiet consequat. Nulla eget vehicula eros. Vivamus dapibus faucibus nunc, vel finibus lacus condimentum ultricies. Nulla justo nibh, semper eu urna ac, finibus suscipit magna.</p>
                    </div>
                    <div className='text-div2'>
                        <p className='text-diferencial-site2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem at leo placerat auctor. Nullam suscipit augue sit amet ligula varius, sodales finibus orci mollis. Cras venenatis imperdiet consequat. Nulla eget vehicula eros. Vivamus dapibus faucibus nunc, vel finibus lacus condimentum ultricies. Nulla justo nibh, semper eu urna ac, finibus suscipit magna.</p>
                        <img className='image1-text2' src={image2Seguranca}/>
                    </div>
                </div>
            </section>
          )
    } else {
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div3-sites-web' >
                    <h1 className='title-diferencial-site-web'>POR QUE INVESTIR EM SEGURANÇA?</h1>
                    <div className='diferencial-cards'>
                        <div className='card-diferencial-site'>
                            <img src={imageDifSeguranca}/>
                            <h1 className='title-dif'>TIME ESPECIALIZADO</h1>
                            <p className='content-dif'>A Littera é composta por um time de profissionais experientes em diversos nichos dentro de TI, como foco na inovação de forma assertiva e segura, trabalhamos dia e noite com amor e dedicação a cada cliente individualmente para garantir os melhores resultados.</p>
                        </div>
                        <div className='card-diferencial-site'>
                            <img src={imageDifSeguranca2}/>
                            <h1 className='title-dif'>TIME ESPECIALIZADO</h1>
                            <p className='content-dif'>A Littera é composta por um time de profissionais experientes em diversos nichos dentro de TI, como foco na inovação de forma assertiva e segura, trabalhamos dia e noite com amor e dedicação a cada cliente individualmente para garantir os melhores resultados.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
          )
    }
}

export default DiferencialSeguranca