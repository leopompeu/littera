import React from 'react'
import { isMobile } from 'react-device-detect'
import styles from '../style'
import { whatsappGold } from '../assets'

import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"


const Contato = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  })

  if(isMobile){
    return (
      <div className={`flex md:flex-row flex-col ${styles.paddingY} contact`} data-aos="fade-up">
        <h1 className='title-contact'>ENTRE EM CONTATO</h1>
        <div>
          <div className='contact-small contact-left'>
            <h1 className='contact-text'>Nome</h1>
          </div>
          <div className='contact-small contact-right'>
            <h1 className='contact-text'>Celular</h1>
          </div>
          <div className='contact-large'>
            <h1 className='contact-text'>Email</h1>
          </div>
          <div className='contact-big'>
            <h1 className='contact-text'>Mensagem</h1>
          </div>
          <div className='contact-button'>
            <h1 className='contact-button-text'>Enviar</h1>
          </div>
        </div>
        <h1 className='whatsapp-text'>Ou nos chame pelo whatsapp!</h1>
        <img className='whatsapp' src={whatsappGold}/>
          
      </div>
    )
  }

}

export default Contato