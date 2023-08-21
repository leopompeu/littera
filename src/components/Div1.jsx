import styles from '../style'

import { arrowCircleDown } from '../assets'

import { isMobile } from 'react-device-detect'

import { HashLink as Link } from 'react-router-hash-link'


const Div1 = () => {

  if(isMobile) {
    return (
        <section id="" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className='bg-div-home container' >
            <h1 className='title'>CONECTE-SE AO SEU FUTURO!</h1>
            <div className='div-subititle-mobile'>
              <p className='subtitle'>A consltoria de TI do futuro</p>
            </div>
            <p className='subtitle2'>para sua empresa decolar!</p>
            <p className='redirect'>VAMOS NOS CONHECER!</p>
            <Link to="#servicos" smooth className='cursor-default'>
              <img src={arrowCircleDown} className='redirect-image' alt='Botão para seguir para sessão: Serviços'/>
            </Link>
          </div>
        </section>
    )
  } else {
    return (
        <section id="" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`${window.innerWidth >= 2000 ? 'bg-div-home-web-big' : 'bg-div-home-web' }`} >
            <h1 className={`${window.innerWidth >= 2000 ? 'title-web-big' : 'title-web'}`}>CONECTE-SE AO SEU</h1>
            <h1 className='title-web2'>FUTURO!</h1>
            <div className='div-subititle'>
              <span className='subtitle-web'>A</span>
              <span className='subtitle-web-yellow'>CONSULTORIA DE TI</span>
              <span className='subtitle-web'> DO FUTURO</span>
            </div>
            <p className='subtitle-web2'>Para sua empresa decolar</p>
            <div className='div-redirect'>
              <p className={`${window.innerWidth >= 2000 ? 'redirect-text-web-big' : 'redirect-text-web'}`}>VAMOS NOS CONHECER!</p>
              <Link to="#servicos" smooth className='cursor-default'>
                <img src={arrowCircleDown} className='redirect-image cursor-pointer' alt='Botão para seguir para sessão: Serviços'/>
              </Link>
            </div>
          </div>
        </section>
    )
  }
  
}

export default Div1