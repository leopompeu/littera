import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import { leo, anna, thomas, buda, batata, serjo, tiao, kauan } from '../assets'

import Carousel from 'nuka-carousel/lib/carousel'

const CarroselTeamSobre = () => {
    if(isMobile) {
        return (
            <div>Div1Sobre</div>
          )
    } else {
        return (
            <div>Div1Sobre</div>
          )
    }
}

export default CarroselTeamSobre