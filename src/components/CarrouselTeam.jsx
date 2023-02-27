import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import { leo, anna, thomas, buda, batata, kenji } from '../assets'

import Carousel from 'nuka-carousel/lib/carousel'

const CarrouselTeam = () => {
  if(isMobile){
    return (
      <section id="carousel-team">
        <h1 className='title-team'>CONHEÇA NOSSO TIME</h1>
        <div className='content-center carousel-team'>
          <Carousel slidesToShow={4} autoplay={true} autoplayInterval={3000} renderBottomCenterControls={false} renderCenterLeftControls={false} renderCenterRightControls={false} wrapAround = {true}>
            <div>
              <img className='images-team' src={leo} />
            </div>
            <div>
              <img className='images-team' src={kenji} />
            </div>
            <div>
                <img className='images-team' src={thomas} />
            </div>
            <div>
                <img className='images-team' src={buda} />
            </div>
            <div>
                <img className='images-team' src={batata} />
            </div>
            <div>
                <img className='images-team' src={anna} />
            </div>
          </Carousel>
        </div>
      </section>
    )
  }
}

export default CarrouselTeam