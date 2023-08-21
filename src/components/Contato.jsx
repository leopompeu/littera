import React from 'react'
import { isMobile } from 'react-device-detect'
import styles from '../style'
import emailjs from '@emailjs/browser'

import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useState } from 'react'
import InputMask from 'react-input-mask';
import ReactGA from 'react-ga4'
import ReactGAOld from 'react-ga';


const Contato = () => {

  const [nome, setName] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [isLoading, setLoading] = useState(false)

  
  function sendToRD(){

    var tag = ""
    if(isMobile){
        tag = "Contato Mobile" 
    } else{
        tag = "Contato Web"
    }

    const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          event_type: 'CONVERSION',
          event_family: 'CDP',
          payload: {
            conversion_identifier: "Conversão" + tag,
            email: email,
            tags: ['Site'],
            legal_bases: [{category: 'communications', type: 'consent', status: 'granted'}],
            name: nome,
            personal_phone: telefone,
          }
        })
      };
      
      fetch('https://api.rd.services/platform/conversions?api_key=clflyOJJlsgawoChjMABrUfUiHPofyytEheJ', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

  const eventTrack = (category, action, label) => {
    console.log("GA event:", category, ":", action, ":", label);
      ReactGAOld.event({
        category: category,
        action: action,
        label: label,                
      })
  }
      
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
    if(nome === '' || email === '' || telefone === ''){
      alert("Preencha todos os campos obrigatórios.");
      return;
    } 
    setLoading(true)
    emailjs.send('service_xa3hzsh','template_p0laihm', templateParams, 'CbcuTc82YooDybrEE')
    .then((response) => {
      sendToRD()
      alert("Email enviado com sucesso!")
      setName('')
      setEmail('')
      setMensagem('')
      setTelefone('')
      setLoading(false)
    }, (err) => {
      console.log("ERRO: " + err)
      alert("Erro! Tente novamente mais tarde.")
    })

  }

  const loading = () => {

  }

  if(isMobile){
    return (
      <div className={`flex md:flex-row flex-col ${styles.paddingY} contact`}>
        {isLoading ?     
        (<div className="loading-container">
          <div className="spinner"></div>
        </div>) :
        (
        <div className='form'>
          <h2 className='title-contact'>ENTRE EM CONTATO</h2>
            <form onSubmit={sendEmail} name='contato-mobile'>
              <div className='contact-small contact-left'>
                <label htmlFor='nome' className='contact-text'>Nome: *</label>
                  <input type='text' 
                  id='nome' 
                  name='nome'
                  pattern="[A-Za-zÀ-ú ]+" 
                  minLength="3"
                  maxLength="50"
                  autoComplete="off"
                  placeholder='Digite seu nome...' 
                  onChange={(e) => setName(e.target.value)}
                  value={nome}/>
              </div>
              <div className='contact-small contact-right'>
                <label htmlFor='celular' className='contact-text'>Celular: *</label>
                  <InputMask type='tel' 
                  mask="(99) 99999-9999" 
                  placeholder="(DDD) 9XXXX-XXXX"
                  id='celular' 
                  autoComplete="off"
                  name='celular' 
                  required
                  onChange={(e) => setTelefone(e.target.value)}
                  value={telefone}/>
              </div>
              <div className='contact-large'>
                <label htmlFor='email' className='contact-text'>Email: *</label>
                  <input type='email' 
                  id='email' 
                  autoComplete="off"
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
                autoComplete="off"
                rows='9' 
                cols='60'
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[\u0410-\u044F<>{}\[\]]/g, '');
                  setMensagem(e.target.value);
                }}
                placeholder='Digite sua mensagem...'
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}/>
              </div>
              <input onClick={eventTrack.bind(this, "Home", "Botão de enviar", "enviouContato")}  id="enviouContato" className='contact-button-mobile' type='submit' value="ENVIAR"/>
            </form>
            <p className='contact-text-bottom'>*Campo obrigatório</p>
          </div>
        )}
       </div>
    )
  } else {
    return(
      <div className={`flex flex-col ${styles.paddingY} ${window.innerWidth >= 1330 && !isMobile ? 'contact-big-back' : 'contact'}  ${window.innerWidth >= 2000 && !isMobile ? 'big-contact' : ''}`}>
         {isLoading ?     
        (<div className="loading-container">
          <div className="spinner"></div>
        </div>) :
        (
          <div>
            <h2 className='title-contact-web'>ENTRE EM CONTATO</h2>
            <div className={`${window.innerWidth >= 2000 && window.innerWidth >= 1330 ? 'bg-contatct-big-big' : 'bg-contatct'} ${window.innerWidth >= 1330 ? 'bg-contatct-big' : 'bg-contatct'}`}>
              <form className='form' onSubmit={sendEmail} name='contato-web'>
                <div>
                  <br/>
                  <br/>
                  <div className='contact-small-web contact-left'>
                    <label htmlFor='nome' className='contact-text'>Nome: *</label>
                    <input type='text' 
                    id='nome' 
                    name='nome' 
                    autoComplete="off"
                    pattern="[A-Za-zÀ-ú ]+" 
                    minLength="3"
                    maxLength="50"
                    placeholder='Digite seu nome...' 
                    onChange={(e) => setName(e.target.value)}
                    value={nome}/>
                  </div>
                  <div className='contact-small-web contact-right'>
                    <label htmlFor='celular' className='contact-text'>Celular: *</label>
                    <InputMask 
                    mask="(99) 99999-9999" 
                    placeholder="(DDD) 9XXXX-XXXX"
                    id='celular' 
                    name='celular' 
                    autoComplete="off"
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
                    <label htmlFor='email' className='contact-text'>Email: *</label>
                    <input type='email' 
                    id='email' 
                    name='email'  
                    autoComplete="off"
                    placeholder='exemplo@exemplo.com'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                  </div>
                  <div className='contact-big-web'>
                    <label htmlFor='mensagem' className='contact-text'>Mensagem:</label>
                          <textarea id='mensagem'
                          name='mensagem'
                          minLength='10'
                          maxLength='300'
                          autoComplete="off"
                          rows='9'
                          cols='95'
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(/[\u0410-\u044F<>{}\[\]]/g, '');
                            setMensagem(e.target.value);
                          }}
                          placeholder='Digite sua mensagem...'
                          onChange={(e) => setMensagem(e.target.value)}
                          value={mensagem}/>
                  </div>
                  <input onClick={eventTrack.bind(this, "Home", "Botão de enviar", "enviouContato")} id="enviouContato" className='contact-button' type='submit' value="ENVIAR"/>
                </div>
                <p className='contact-text-bottom'>*Campo obrigatório</p>
              </form>
            </div>
          </div>
        )}          
      </div>
    )
  }

}

export default Contato