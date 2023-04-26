import styles from '../style'

import { arrowCircleDown } from '../assets'

import { isMobile } from 'react-device-detect'

import { HashLink as Link } from 'react-router-hash-link'

const Div1 = () => {

  if(isMobile) {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className='bg-div-home container' >
            <h1 className='title'>CONECTE-SE AO SEU FUTURO!</h1>
            <p className='subtitle'>A inovação e a solução que sua empresa busca</p>
            <p className='subtitle2'>Nós criamos para você!</p>
            <p className='redirect'>Vamos nos conhecer!</p>
            <Link to="#servicos" smooth className='cursor-default'>
              <img src={arrowCircleDown} className='redirect-image'/>
            </Link>
          </div>
        </section>
    )
  } else {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className='bg-div-home-web' >
            <h1 className='title-web'>CONECTE-SE AO SEU</h1>
            <h1 className='title-web2'>FUTURO!</h1>
            <p className='subtitle-web'>A inovação e a solução que sua empresa busca</p>
            <p className='subtitle-web2'>Nós criamos para você!</p>
            <p className='redirect-text-web'>Vamos nos conhecer!</p>
            <Link to="#servicos" smooth className='cursor-default'>
              <img src={arrowCircleDown} className='redirect-image cursor-pointer'/>
            </Link>
          </div>
        </section>
    )
  }
  
}

export default Div1