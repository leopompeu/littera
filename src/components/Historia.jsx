import React from 'react'
import { isMobile } from 'react-device-detect'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"


const Historia = () => {
    if(isMobile) {
        return (
            <div>Div1Sobre</div>
          )
    } else {
        return (
            <section id="historia" className={`flex flex-col ${styles.paddingY}`}>
        
          <h1 className='title-div3-web'>CONHEÇA NOSSA</h1>
          <h1 className='title-historia'>HISTÓRIA</h1>
          <div data-aos="fade-left">
            <img className='image1-historia' src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"></img>
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