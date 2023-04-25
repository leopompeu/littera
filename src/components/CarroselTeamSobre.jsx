import React from 'react'
import { isMobile } from 'react-device-detect'

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