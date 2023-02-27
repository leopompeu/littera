import React from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState } from 'react'
import { RxDotFilled, RxDot } from 'react-icons/rx'
import Carousel from 'nuka-carousel/lib/carousel'
import { isMobile } from 'react-device-detect'
import Aos from 'aos'


function CardServicos() {
    if(isMobile){
        return (
            <div className='content-center carousel' data-aos="fade-up">
                <Carousel 
                    autoplay= {true}
                    autoplayInterval = {5000}
                    wrapAround = {true}
                    defaultControlsConfig={{
                        pagingDotsStyle: {
                            fill: "white",
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
                        <img className='images' src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                    </div>
                    <div>
                        <img className='images' src='https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                    </div>
                    <div>
                        <img className='images' src='https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                    </div>
                </Carousel>
            </div>
          )
        }
    }
  

export default CardServicos