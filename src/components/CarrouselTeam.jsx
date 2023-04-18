import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import { leo, anna, thomas, buda, batata } from '../assets'

import Carousel from 'nuka-carousel/lib/carousel'

const CarrouselTeam = () => {
  if(isMobile){
    return (
      <section id="carousel-team">
        <h1 className='title-team'>CONHEÇA NOSSO TIME</h1>
        <div className='content-center carousel-team'>
          <a href='/sobre'>
            <Carousel slidesToShow={4} autoplay={true} autoplayInterval={3000} renderBottomCenterControls={false} renderCenterLeftControls={false} renderCenterRightControls={false} wrapAround = {true}>
              <div>
                <img className='images-team' src={leo} />
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
          </a>
        </div>
      </section>
    )
  } else {
    return(
      <section id="carousel-team" className={`flex flex-col ${styles.paddingY}`}>
        <h1 className='title-team-web'>CONHEÇA NOSSO TIME</h1>
        <div className='carousel-team-web container-carousel'>
          <a href='/sobre'>
              <div className='images-carousel leo-carousel-web'>
              </div>
              <div className='images-carousel thomas-carousel-web'>
              </div>
              <div className='images-carousel buda-carousel-web'>
              </div>
              <div className='images-carousel batata-carousel-web'>
              </div>
              <div className='images-carousel anna-carousel-web'>
              </div>
          </a>
        </div>
      </section>
    )
  }
}

export default CarrouselTeam