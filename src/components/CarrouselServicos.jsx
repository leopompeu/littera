import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'
import { isMobile } from 'react-device-detect'
import { card1, card2, card3 } from '../assets'


function CardServicos() {
    if(isMobile){
        return (
            <div className='content-center carousel' data-aos="fade-up">
                <Carousel 
                    autoplay= {true}
                    autoplayInterval = {3500}
                    wrapAround = {true}
                    defaultControlsConfig={{
                        pagingDotsStyle: {
                            marginRight: "15px",
                            position: 'relative',
                            top: '60px'
                        }
                    }}
                    className=".slider-control-bottomcenter button" 
                    renderCenterLeftControls={({ previousSlide }) => (
                        <div className='text-white cursor-pointer'>
                        
                        </div>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <div className='text-white cursor-pointer'>
                        
                        </div>
                )}>
                    <div>
                        <a href='/sites'>
                            <img className='images' src={ card1 } />
                        </a>
                    </div>
                    <div>
                        <a href='/aplicativos'>
                            <img className='images' src={ card2 } />
                        </a>
                    </div>
                    <div>
                        <a href='/seguranca'>
                            <img className='images' src={ card3 } />
                        </a>
                    </div>
                </Carousel>
            </div>
          )
        }
    }
  

export default CardServicos