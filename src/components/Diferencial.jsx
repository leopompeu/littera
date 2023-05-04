import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Carousel as CarouselWeb } from 'react-bootstrap'
import { diferencialCarousel } from '../assets'

const Diferencial = () => {


  useEffect(() => {
    Aos.init({duration: 2000});
  })

  if(isMobile){
    return (
      <section id="diferencial" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className='bg-div3 container' >
          <h1 className='title-div3'>POR QUE A</h1>
          <h1 className='title-div3-2'>LITTERA?</h1>
        </div>
      
      </section>
    )
  } else {
    return (
      <section id="diferencial" className={`flex flex-col ${styles.paddingY}`}>
        <div className='bg-div3-web' >
          <h1 className='title-div3-web'>POR QUE A</h1>
          <h1 className='title-div3-web2'>LITTERA?</h1>
          <div data-aos="fade-left">
          <CarouselWeb className='carousel-diferencial-web'>
                    <CarouselWeb.Item> 
                    <div className='carousel-diferencial-item'>
                      <img src={diferencialCarousel}/>
                          <div>
                          
                            <h1 className='txt-carousel-diferencial'>Lorem Ipsum</h1>
                            <p className='txt-carousel-descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur tempore sunt amet alias quisquam fuga error doloremque deleniti voluptatem, modi porro impedit repellat aut laboriosam blanditiis atque architecto dignissimos!</p>
                          </div>
                    </div>
                    
                    </CarouselWeb.Item>
                    <CarouselWeb.Item> 
                    <img src={diferencialCarousel}/>
                        <div>
                          
                        </div>
                    </CarouselWeb.Item>
                    <CarouselWeb.Item> 
                    <img src={diferencialCarousel}/>
                        <div>
                          
                        </div>
                    </CarouselWeb.Item>
                    <CarouselWeb.Item>
                    <img src={diferencialCarousel}/> 
                        <div>
                          
                        </div>
                    </CarouselWeb.Item>
                    <CarouselWeb.Item> 
                    <img src={diferencialCarousel}/>
                        <div>
                          
                        </div>
                    </CarouselWeb.Item>
                    <CarouselWeb.Item> 
                      <img src={diferencialCarousel}/>
                        <div>
                          
                        </div>
                    </CarouselWeb.Item>
                </CarouselWeb>
           
          </div>
         
        </div>
      
      </section>
    )
  }
}

export default Diferencial