import { useState, useEffect } from "react"
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser'
import { isMobile } from "react-device-detect";


const ModalContato = ({ isOpen, setIsOpen, id="modal" }) => {
    const [nome, setName] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [transitionState, setTransitionState] = useState(false)
      
    const templateParams = {
      from_name: nome,
      empresa: empresa,
      email: email,
      telefone: telefone
    }
  
    function sendEmail(e){
      e.preventDefault();
      if(nome === '' || email === '' || empresa === '' || telefone === ''){
        alert("ce é burro é?");
        return;
      }
  
      emailjs.send('service_xa3hzsh','template_78ye1m2', templateParams, 'CbcuTc82YooDybrEE')
      .then((response) => {
        console.log("EMAIL ENVIADO ", response.status, response.text)
        setName('')
        setEmail('')
        setEmpresa('')
        setTelefone('')
      }, (err) => {
        console.log("ERRO: ", err)
      })
  
    }

    const handleBackDropClick = (e) => {
        if(e) e.preventDefault;
        if(e.target.id !== id){return} 
        setIsOpen(false)

    }
    if(isMobile){
        if(isOpen){
            return (
                <div className="backdrop" id={id} onClick={handleBackDropClick}>
                    <div className="div-modal">
                        <div className="body-modal">
                            <br/>       
                            <h1 className="title-modal">VAMOS CONVERSAR?</h1>
                            <form className="form-modal" onSubmit={sendEmail}>
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
                                                placeholder='Ex: Serjo' 
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
                                                placeholder="(DD) 9XXXX-XXXX"
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
                                <div className="buttons-modal">
                                    <input className='contact-button-modal' type='submit' value="ENVIAR"/>
                                    <button className='contact-back-button-modal' onClick={() => setIsOpen(false)}>VOLTAR</button>
                                </div>
                            </form>
            
                        </div>
                    </div>
                </div>
            )
        } else {
            return(null)
        }
        
    } else {
        if(isOpen){
            return (
                <div className="backdrop" id={id} onClick={handleBackDropClick}>
                    <div className="div-modal">
                        <div className="body-modal">
                            <br/>       
                            <h1 className="title-modal">VAMOS CONVERSAR?</h1>
                            <form className="form-modal" onSubmit={sendEmail}>
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
                                                placeholder='Ex: Serjo' 
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
                                                placeholder="(DD) 9XXXX-XXXX"
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
                                <div className="buttons-modal">
                                    <input className='contact-button-modal' type='submit' value="ENVIAR"/>
                                    <button className='contact-back-button-modal' onClick={() => setIsOpen(false)}>VOLTAR</button>
                                </div>
                            </form>
            
                        </div>
                    </div>
                </div>
            )
        } else {
            return(null)
        }
        
    }

}

export default ModalContato;