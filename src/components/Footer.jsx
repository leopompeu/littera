import React from 'react'

import styles from '../style'
import { isMobile } from 'react-device-detect'
import { lineBig, map, instagram, linkedin, facebook, twitter, whatsapp, telegram, email } from '../assets'
import { useLocation } from 'react-router-dom'


const Footer = () => {
    const location = useLocation();

    if(isMobile){
        return (
            <div className={`flex md:flex-row flex-col ${styles.paddingY} footer-component ${location.pathname === "/" ? '' : 'footer-sites'}`}>
                <img src={lineBig} className='footer-line'/>
                <div>
                    <div className='div1-footer'>
                        <h1 className='footer-text'>Conecte-se</h1>
                        <h1 className='footer-text text-left'>Contato</h1>
                    </div>
                    <div className='div2-footer'>
                        <div className='icon-first'>
                            <a href='https://www.instagram.com'>
                                <img className='icon-button' src={instagram}/>
                            </a>
                        </div>
                        <a href='https://www.facebook.com'>
                            <img className='icon-button icon-margin' src={facebook}/>
                        </a>
                        <a href='https://www.linkedin.com/company/littera-it/'>
                            <img className='icon-button icon-margin' src={linkedin}/>
                        </a>
                        <a href='https://www.twitter.com'>
                            <img className='icon-button icon-margin' src={twitter}/>
                        </a>
                        <a href='mailto:leopompeu1209@gmail.com?subject=Littera&body=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Littera!'>
                            <img className='icon-button-email icon-margin-end icon-end' src={email}/>
                        </a>
                        <a href='https://t.me/leopompeu'>
                            <img className='icon-button icon-margin-end icon-end2' src={telegram}/>
                        </a>
                        <a href='https://wa.me/5513996237281?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!'>
                            <img className='icon-button icon-margin-end icon-end3' src={whatsapp}/>
                        </a>
                    </div>
                    <div className='div3-footer'>
                        <h1 className='footer-text'>Você pode se interessar</h1>
                        <h1 className='footer-text text-left'>Nosso QG</h1>
                    </div>
                    <div className='div4-footer'>
                        <div className='div-div4-footer'>
                            <div>
                                <a href='/sites'>
                                    <h1 className='text-footer-interest'>Sites</h1>
                                </a>
                                <a href='/seguranca'>
                                    <h1 className='text-footer-interest'>Segurança digital</h1>
                                </a>
                                <a href='/aplicativos'>
                                    <h1 className='text-footer-interest'>Aplicativos</h1>
                                </a>
                            </div>
                            <div className='div-div-div4-footer'>
                                <a href='/orcamentos'>
                                    <h1 className='text-footer-interest'>Orçamentos</h1>
                                </a>
                                <a href='/sobre'>
                                    <h1 className='text-footer-interest'>Sobre nós</h1>
                                </a>                         
                            </div>
                        </div>
                        <a href='https://www.google.com.br/maps/place/R.+Jaú,+880+-+Boqueirão,+Praia+Grande+-+SP,+11700-270/@-24.0103153,-46.4154091,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce1db10f7116ed:0x6fa4eff42d67b32e!8m2!3d-24.0103153!4d-46.4132151!16s%2Fg%2F11g1gq6y7v'>
                            <img src={map} className='map'/>
                        </a>
                    </div>
                    <h1 className='love'>Feito com 💜 por Littera</h1>
                </div>
            </div>
          )
    } else {

    }

}

export default Footer