import React from 'react'

import { isMobile } from 'react-device-detect'

const NavBar = () => {
  if(isMobile){
    return (
      <div>NavBar</div>
    )
  } else{
    return (
      
    )
  }

}

export default NavBar