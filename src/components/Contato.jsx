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
          <label htmlFor='nome' className='contact-text'>Nome</label>
            <input type='text' id='nome' name='nome' required/>
        </div>
          <div className='contact-small contact-right'>
          <label htmlFor='celular' className='contact-text'>Celular</label>
            <input type='tel' id='celular' name='celular' pattern='[0-9]{2}[0-9]{5}[0-9]{4}' />
          </div>
          <div className='contact-large'>
          <label htmlFor='email' className='contact-text'>Email</label>
            <input type='email' id='email' name='email' required/>
          </div>
          <div className='contact-big'>
          <label htmlFor='mensagem' className='contact-text'>Mensagem</label>
            <textarea id='mensagem' name='mensagem' rows='9' cols='33'></textarea>
          </div>
          <div className='contact-button'>
            <h1 className='contact-button-text'>Enviar</h1>
          </div>
        </div>
       </div>
    )
  } else {
    return(
      <div className={`flex flex-col ${styles.paddingY} contact`}>
        <h1 className='title-contact-web'>ENTRE EM CONTATO</h1>
        <div className='bg-contatct'>
          <div>
            <br/>
            <br/>
            <div className='contact-small-web contact-left'>
            <label htmlFor='nome' className='contact-text'>Nome</label>
            <input type='text' id='nome' name='nome' required/>
            </div>
            <div className='contact-small-web contact-right'>
            <label htmlFor='celular' className='contact-text'>Celular</label>
            <input type='tel' id='celular' name='celular' pattern='[0-9]{2}[0-9]{5}[0-9]{4}' />
            </div>
            <br/>
            <br/>
            <br/>
            <div className='contact-large-web'>
            <label htmlFor='email' className='contact-text'>Email</label>
            <input type='email' id='email' name='email' required/>
            </div>
            <div className='contact-big'>
            <label htmlFor='mensagem' className='contact-text'>Mensagem</label>
            <textarea id='mensagem' name='mensagem' rows='7' cols='54'></textarea>
            </div>
            <a>
              <div className='contact-button'>
                <h1 className='contact-button-text'>Enviar</h1>
              </div>
            </a>
          </div>
        </div>          
      </div>
    )
  }

}

export default Contato