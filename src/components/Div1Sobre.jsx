import React from 'react'
import { isMobile } from 'react-device-detect'

const Div1Sobre = () => {
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

export default Div1Sobre