import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import { leo, anna, thomas, buda, batata, serjo, tiao, kauan } from '../assets'

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
              <div>
                  <img className='images-team' src={serjo} />
              </div>
              <div>
                  <img className='images-team' src={tiao} />
              </div>
              <div>
                  <img className='images-team' src={kauan} />
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
          <Carousel slidesToShow={6} autoplay={true} autoplayInterval={2000} renderBottomCenterControls={false} cellAlign={`center`} renderCenterLeftControls={false} renderCenterRightControls={false} wrapAround = {true}>
              <div className='images-team-web leo-carousel-web'>
              </div>
              <div className='images-team-web thomas-carousel-web'>
              </div>
              <div className='images-team-web buda-carousel-web'>
              </div>
              <div className='images-team-web batata-carousel-web'>
              </div>
              <div className='images-team-web anna-carousel-web'>
              </div>
              <div className='images-team-web serjo-carousel-web'>
              </div>
              <div className='images-team-web tiao-carousel-web'>
              </div>
              <div className='images-team-web kauan-carousel-web'>
              </div>
            </Carousel>
          </a>
        </div>
      </section>
    )
  }
}

export default CarrouselTeam