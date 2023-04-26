import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { imageProposito } from '../assets'

const Proposito = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      })
      
    if(isMobile) {
        return (
          <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
              <div className='bg-div3-sites container' >
                  <h1 className='title-proposito-mobile'>CONHEÇA O NOSSO</h1>
                  <h1 className='title-diferencial-site2'>PROPÓSITO!</h1>
                  <div className='proposito-div'>
                      <p className='text-proposito-mobile'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem at leo placerat auctor. Nullam suscipit augue sit amet ligula varius, sodales finibus orci mollis. Cras venenatis imperdiet consequat. Nulla eget vehicula eros. Vivamus dapibus faucibus nunc, vel finibus lacus condimentum ultricies. Nulla justo nibh, semper eu urna ac, finibus suscipit magna.</p>
                      <img className='image1-text2' src={imageProposito} data-aos="flip-left"/>
                  </div>
              </div>
          </section>
          )
    } else {
        return (
            <section id="proposito" className={`flex flex-col ${styles.paddingY}`}>
        <div className='bg-div3-sites-web' >
          <h1 className='title-div3-web'>CONHEÇA NOSSOS</h1>
          <h1 className='title-proposito'>PROPÓSITOS</h1>
          <div data-aos="fade-right">
            <img className='image1-proposito' src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"></img>
            <div className='card-proposito-web'>
              <div className='textbox-proposito-web'>
                 <p className='text-proposito-web'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam autem cupiditate natus enim assumenda et veritatis esse, non distinctio! Reprehenderit quo quod vero nulla impedit magni optio tempore perferendis.</p>
              </div>
            </div>
          </div>
        </div>
          </section>
          )
    }
}

export default Proposito