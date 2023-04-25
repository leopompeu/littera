import React from 'react'
import { isMobile } from 'react-device-detect'
import styles from '../style'
import emailjs from '@emailjs/browser'

import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useState } from 'react'
import InputMask from 'react-input-mask';

const Contato = () => {
  const [nome, setName] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
    
  const templateParams = {
    from_name: nome,
    message: mensagem,
    email: email,
    telefone: telefone
  }
    
  useEffect(() => {
    Aos.init({duration: 2000});
  })

  function sendEmail(e){
    e.preventDefault();
    if(nome === '' || email === '' || mensagem === '' || telefone === ''){
      alert("ce é burro é?");
      return;
    }

    emailjs.send('service_xa3hzsh','template_p0laihm', templateParams, 'CbcuTc82YooDybrEE')
    .then((response) => {
      console.log("EMAIL ENVIADO ", response.status, response.text)
      setName('')
      setEmail('')
      setMensagem('')
      setTelefone('')
    }, (err) => {
      console.log("ERRO: ", err)
    })

  }

  if(isMobile){
    return (
      <div className={`flex md:flex-row flex-col ${styles.paddingY} contact`} data-aos="fade-up">
        <h1 className='title-contact'>ENTRE EM CONTATO</h1>
          <form onSubmit={sendEmail}>
            <div className='contact-small contact-left'>
              <label htmlFor='nome' className='contact-text'>Nome</label>
                <input type='text' 
                id='nome' 
                name='nome'
                onChange={(e) => setName(e.target.value)}
                value={nome}/>
            </div>
            <div className='contact-small contact-right'>
              <label htmlFor='celular' className='contact-text'>Celular</label>
                <input type='tel' 
                id='celular' 
                name='celular' 
                pattern='[0-9]{2}[0-9]{5}[0-9]{4}' 
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}/>
            </div>
            <div className='contact-large'>
              <label htmlFor='email' className='contact-text'>Email</label>
                <input type='email' 
                id='email' 
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </div>
            <div className='contact-big'>
              <label htmlFor='mensagem' className='contact-text'>Mensagem</label>
                <textarea id='mensagem' 
                name='mensagem' 
                rows='9' 
                cols='33'
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}></textarea>
            </div>
            <input className='contact-button-mobile' type='submit' value="ENVIAR"/>
          </form>
       </div>
    )
  } else {
    return(
      <div className={`flex flex-col ${styles.paddingY} contact`}>
        <h1 className='title-contact-web'>ENTRE EM CONTATO</h1>
        <div className='bg-contatct'>
          <form className='form' onSubmit={sendEmail}>
            <br/>
            <br/>
            <div className='contact-small-web contact-left'>
            <label htmlFor='nome' className='contact-text'>Nome</label>
            <input type='text' 
            id='nome' 
            name='nome' 
            pattern="[A-Za-zÀ-ú ]+" 
            minLength="3"
            maxLength="50"
            placeholder='Digite seu nome...' 
            onChange={(e) => setName(e.target.value)}
            value={nome}/>
            </div>
            <div className='contact-small-web contact-right'>
            <label htmlFor='celular' className='contact-text'>Celular</label>
              <InputMask 
              mask="(99) 99999-9999" 
              placeholder="(DD) 9XXXX-XXXX"
              id='celular' 
              name='celular' 
              type='tel' 
              required
              onChange={(e) => setTelefone(e.target.value)}
              value={telefone}
            />
            </div>
            <br/>
            <br/>
            <br/>
            <div className='contact-large-web'>
            <label htmlFor='email' className='contact-text'>Email</label>
            <input type='email' 
            id='email' 
            name='email'  
            placeholder='exemplo@exemplo.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>
            </div>
            <div className='contact-big'>
      <label htmlFor='mensagem' className='contact-text'>Mensagem</label>
            <textarea id='mensagem'
            name='mensagem'
            minLength='10'
            maxLength='300'
            rows='9'
            cols='95'
            onInput={(e) => {
            e.target.value = e.target.value.replace(/[<>\[\]{}]/g, '');
            setMensagem(e.target.value);
        }}
        placeholder='Digite sua mensagem...'
        onChange={(e) => setMensagem(e.target.value)}
        value={mensagem}></textarea>
    </div>
            <input className='contact-button' type='submit' value="ENVIAR"/>
          </form>
        </div>          
      </div>
    )
  }

}

export default Contato