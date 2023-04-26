import React from 'react'
import { isMobile } from 'react-device-detect'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { image1, image2, imageHistoria, imageHistoriaWeb, imageProposito } from '../assets'


const Historia = () => {
    if(isMobile) {
        return (
          <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>      
            <h1 className='title-história-mobile'>CONHEÇA A NOSSA</h1>
            <h1 className='title-diferencial-site2'>HISTÓRIA!</h1>
            <div className='historia-div'>
              <img className='image-historia' src={imageHistoria} data-aos="flip-left"/>
              <p className='text-historia-mobile'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem at leo placerat auctor. Nullam suscipit augue sit amet ligula varius, sodales finibus orci mollis. Cras venenatis imperdiet consequat. Nulla eget vehicula eros. Vivamus dapibus faucibus nunc, vel finibus lacus condimentum ultricies. Nulla justo nibh, semper eu urna ac, finibus suscipit magna.</p>
            </div>
          </section>
          )
    } else {
        return (
            <section id="historia" className={`flex flex-col ${styles.paddingY}`}>
        
              <h1 className='title-conheca'>CONHEÇA NOSSA</h1>
              <h1 className='title-historia'>HISTÓRIA</h1>
              <div data-aos="fade-left">
                <img className='image1-historia' src={imageHistoriaWeb}></img>
                <div className='card-historia-web'>
                  <div className='textbox-historia-web'>
                    <p className='text-historia-web'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam autem cupiditate natus enim assumenda et veritatis esse, non distinctio! Reprehenderit quo quod vero nulla impedit magni optio tempore perferendis.</p>
                  </div>
                </div>
              </div>
            
            </section>
          )
    }
}

export default Historia