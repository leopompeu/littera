import { useState, useEffect } from "react"
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser'
import { isMobile } from "react-device-detect";
import { enableBodyScroll } from "body-scroll-lock";
import { useRef } from "react";
import ReactGA from 'react-ga4'
import ReactGAOld from 'react-ga';



const ModalContato = ({ isOpen, setIsOpen, id="modal", thisAnimation, setAnimation, thisAnimation2, setAnimation2}) => {
    const [nome, setName] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [isLoading, setLoading] = useState(false)

    const eventTrack = (category, action, label) => {
        console.log("GA event:", category, ":", action, ":", label);
          ReactGAOld.event({
            category: category,
            action: action,
            label: label,
          })
      }

    function closeModal(){
        setIsOpen(false)
    }
    

    function sendToRD(){
        var tag = ""
        if(isMobile){
            tag = "Popup Mobile" 
        } else{
            tag = "Popup Web"
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
                company_name: empresa
              }
            })
          };
          
          fetch('https://api.rd.services/platform/conversions?api_key=clflyOJJlsgawoChjMABrUfUiHPofyytEheJ', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const templateParams = {
      from_name: nome,
      empresa: empresa,
      email: email,
      telefone: telefone
    }
  
    function sendEmail(e){
        

      e.preventDefault();
      if(nome === '' || email === '' || empresa === '' || telefone === ''){
        alert("Preencha todos os campos!");
        return;
      }
      setLoading(true)
      emailjs.send('service_xa3hzsh','template_78ye1m2', templateParams, 'CbcuTc82YooDybrEE')
      .then((response) => {
        sendToRD()
        setName('')
        setEmail('')
        setEmpresa('')
        setTelefone('')
        setLoading(false)
        alert("Email enviado com sucesso!")
        setAnimation({animation: 'slide-out'})
        setTimeout(setAnimation2({animation: 'fade-out2'}), 400)
        setTimeout(closeModal, 800)
        enableBodyScroll(document)
      }, (err) => {
        console.log("ERRO: ", err)
        alert("Erro! Tente novamente mais tarde.")
      })
  
    }
    const handleBackDropClick = (e) => {
        if(e) e.preventDefault;
        if(e.target.id !== id){return} 
        setIsOpen(false)
        enableBodyScroll(document)
    }
    if(isMobile){
        if(isOpen){
            return (
                <div className={`backdrop ${thisAnimation2.animation}`} id={id} onClick={handleBackDropClick}>
                    {isLoading ? 
                    (
                        <div className="loading-container">
                            <div className="spinner"></div>
                        </div>
                    ) 
                    :
                    (
                        <div className={`div-modal-mobile ${thisAnimation.animation}`}>
                            <div className="body-modal center-divs">
                                <br/>       
                                <h1 className="title-modal-mobile">VAMOS CONVERSAR?</h1>
                                <form className="form-modal-mobile center-divs" onSubmit={sendEmail} name='contato-popup-mobile'>
                                    <div>
                                        <div className="div-item-form-modal">
                                            <div>
                                                <label htmlFor='nome' className='contact-text-modal-mobile'>Nome</label>
                                                <div className='contact-modal-mobile contact-modal-left'>
                                                    <input type='text' 
                                                    id='nome' 
                                                    name='nome' 
                                                    autoComplete="off"
                                                    pattern="[A-Za-zÀ-ú ]+" 
                                                    className="contact-modal-input-mobile"
                                                    minLength="3"
                                                    maxLength="50"
                                                    onInput={(e) => {
                                                        e.target.value = e.target.value.replace(/[\u0410-\u044F<>{}\[\]]/g, '');
                                                        setName(e.target.value);
                                                    }}
                                                    placeholder='Ex: João Pedro Silva' 
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={nome}/>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor='empresa' className='contact-text-modal-mobile'>Empresa</label>
                                                <div className='contact-modal-mobile'>
                                                    <input type='text' 
                                                    id='empresa' 
                                                    name='empresa' 
                                                    autoComplete="off"
                                                    pattern="[A-Za-zÀ-ú ]+" 
                                                    className="contact-modal-input-mobile"
                                                    minLength="3"
                                                    maxLength="50"
                                                    onInput={(e) => {
                                                        e.target.value = e.target.value.replace(/[\u0410-\u044F<>{}\[\]]/g, '');
                                                        setEmpresa(e.target.value);
                                                    }}
                                                    placeholder='Ex: Littera' 
                                                    onChange={(e) => setEmpresa(e.target.value)}
                                                    value={empresa}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="div-item-form-modal2">
                                            <div>
                                                <label htmlFor='email' className='contact-text-modal-mobile'>Email</label>
                                                <div className='contact-modal-mobile contact-modal-left'>
                                                    <input type='email' 
                                                    id='email' 
                                                    name='email' 
                                                    autoComplete="off"
                                                    className="contact-modal-input-mobile"
                                                    minLength="3"
                                                    maxLength="50"
                                                    onInput={(e) => {
                                                        e.target.value = e.target.value.replace(/[\u0410-\u044F<>{}\[\]]/g, '');
                                                        setEmail(e.target.value);
                                                    }}
                                                    placeholder='name@email.com' 
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    value={email}/>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor='celular' className='contact-text-modal-mobile'>Celular</label>
                                                <div className='contact-modal-mobile'>
                                                    <InputMask 
                                                    mask="(99) 99999-9999" 
                                                    placeholder="(DDD) 9XXXX-XXXX"
                                                    id='celular' 
                                                    name='celular' 
                                                    autoComplete="off"
                                                    className="contact-modal-input-mobile"
                                                    type='tel' 
                                                    required
                                                    onChange={(e) => setTelefone(e.target.value)}
                                                    value={telefone}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input onClick={eventTrack.bind(this, "Home", "Botão de enviar", "enviouContato")}  className='contact-button-modal-mobile' type='submit' value="ENVIAR"/>

                                </form>
                                <button className='contact-back-button-modal' onClick={() => { setAnimation({animation: 'slide-out'}); setTimeout(setAnimation2({animation: 'fade-out2'}), 400); setTimeout(closeModal, 800); enableBodyScroll(document); }}>VOLTAR</button>
                            </div>
                        </div>
                    )}
                </div>
            )
        } else {
            return(null)
        }
        
    } else {
        if(isOpen){
            return (
                <div className={`backdrop ${thisAnimation2.animation}`} id={id} onClick={handleBackDropClick}>
                    {isLoading ? 
                    (
                        <div className="loading-container">
                            <div className="spinner"></div>
                        </div>
                    ) 
                    :
                    (
                    <div className={`div-modal ${thisAnimation.animation}`}>
                        <div className="body-modal">
                            <br/>       
                            <h1 className="title-modal">VAMOS CONVERSAR?</h1>
                            <form className="form-modal" onSubmit={sendEmail} name='contato-popup-web'>
                                <div>
                                    <div className="div-item-form-modal">
                                        <div>
                                            <label htmlFor='nome' className='contact-text-modal'>Nome</label>
                                            <div className='contact-modal contact-left-modal'>
                                                <input type='text' 
                                                id='nome' 
                                                name='nome' 
                                                autoComplete="off"
                                                pattern="[A-Za-zÀ-ú ]+" 
                                                className="contact-modal-input"
                                                minLength="3"
                                                maxLength="50"
                                                onInput={(e) => {
                                                    e.target.value = e.target.value.replace(/[\u0410-\u044F<>{}\[\]]/g, '');
                                                    setName(e.target.value);
                                                  }}
                                                placeholder='Ex: João Pedro Silva' 
                                                onChange={(e) => setName(e.target.value)}
                                                value={nome}/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor='empresa' className='contact-text-modal'>Empresa</label>
                                            <div className='contact-modal'>
                                                <input type='text' 
                                                id='empresa' 
                                                name='empresa' 
                                                autoComplete="off"
                                                pattern="[A-Za-zÀ-ú ]+" 
                                                className="contact-modal-input"
                                                minLength="3"
                                                maxLength="50"
                                                onInput={(e) => {
                                                    e.target.value = e.target.value.replace(/[\u0410-\u044F<>{}\[\]]/g, '');
                                                    setEmpresa(e.target.value);
                                                  }}
                                                placeholder='Ex: Littera' 
                                                onChange={(e) => setEmpresa(e.target.value)}
                                                value={empresa}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-item-form-modal2">
                                        <div>
                                            <label htmlFor='email' className='contact-text-modal'>Email</label>
                                            <div className='contact-modal contact-left-modal'>
                                                <input type='email' 
                                                id='email' 
                                                name='email' 
                                                autoComplete="off"
                                                className="contact-modal-input"
                                                minLength="3"
                                                maxLength="50"
                                                onInput={(e) => {
                                                    e.target.value = e.target.value.replace(/[\u0410-\u044F<>{}\[\]]/g, '');
                                                    setEmail(e.target.value);
                                                  }}
                                                placeholder='name@email.com' 
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor='celular' className='contact-text-modal'>Celular</label>
                                            <div className='contact-modal'>
                                                <InputMask 
                                                mask="(99) 99999-9999" 
                                                placeholder="(DDD) 9XXXX-XXXX"
                                                id='celular' 
                                                name='celular' 
                                                autoComplete="off"
                                                className="contact-modal-input"
                                                type='tel' 
                                                required
                                                onChange={(e) => setTelefone(e.target.value)}
                                                value={telefone}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input onClick={eventTrack.bind(this, "Home", "Botão de enviar", "enviouContato")}  className='contact-button-modal' type='submit' value="ENVIAR"/>
                            </form>
                            <button className='contact-back-button-modal' type="close" onClick={() => { setAnimation({animation: 'slide-out'}); setAnimation2({animation: 'fade-out2'}); setTimeout(closeModal, 800); enableBodyScroll(document); }}>VOLTAR</button>
                        </div>
                    </div>
                    )}
                </div>
            )
        } else {
            return(null)
        }
        
    }

}

export default ModalContato;