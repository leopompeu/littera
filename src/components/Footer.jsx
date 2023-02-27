import React from 'react'

import styles from '../style'
import { isMobile } from 'react-device-detect'
import { lineBig, map, instagram, linkedin, facebook, twitter, whatsapp, telegram, email } from '../assets'


const Footer = () => {
    if(isMobile){
        return (
            <div className={`flex md:flex-row flex-col ${styles.paddingY} footer-component`}>
                <img src={lineBig} className='footer-line'/>
                <div>
                    <div className='div1-footer'>
                        <h1 className='footer-text'>Conecte-se</h1>
                        <h1 className='footer-text text-left'>Contato</h1>
                    </div>
                    <div className='div2-footer'>
                        <img className='icon-button icon-first' src={instagram}/>
                        <img className='icon-button icon-margin' src={facebook}/>
                        <img className='icon-button icon-margin' src={linkedin}/>
                        <img className='icon-button icon-margin' src={twitter}/>
                        <img className='icon-button-email icon-margin-end icon-end' src={email}/>
                        <img className='icon-button icon-margin-end icon-end2' src={linkedin}/>
                        <img className='icon-button icon-margin-end icon-end3' src={whatsapp}/>
                    </div>
                    <div className='div3-footer'>
                        <h1 className='footer-text'>Você pode se interessar</h1>
                        <h1 className='footer-text text-left'>Nosso QG</h1>
                    </div>
                    <div className='div4-footer'>
                        <div className='div-div4-footer'>
                            <div>
                                <h1 className='text-footer-interest'>Sites</h1>
                                <h1 className='text-footer-interest'>Segurança digital</h1>
                                <h1 className='text-footer-interest'>Aplicativos</h1>
                            </div>
                            <div className='div-div-div4-footer'>
                                <h1 className='text-footer-interest'>Orçamentos</h1>
                                <h1 className='text-footer-interest'>Sobre nós</h1>
                            </div>
                        </div>
                        <img src={map} className='map'/>
                    </div>
                    <h1 className='love'>Feito com 💜 por Littera</h1>
                </div>
            </div>
          )
    } else {

    }

}

export default Footer