import React from 'react'

import styles from '../style'
import { isMobile } from 'react-device-detect'
import { lineBig, map, instagram, linkedin, facebook, twitter, whatsapp, telegram, email } from '../assets'
import { useLocation } from 'react-router-dom'


const Footer = () => {
    const location = useLocation();

    if(isMobile){
        return (
            <div className={`flex md:flex-row flex-col ${styles.paddingY} footer-component ${location.pathname === "/" ? 'footer-home' : 'footer-sites'}`}>
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
        return(
            <div className={`flex flex-col ${location.pathname === "/" ? 'footer-home' : 'footer-sites'}`}>
                <img src={lineBig} className='footer-line-web'/>
                <div className='footer-component-web'>
                    <div className='div-footer'>
                        <h1 className='footer-title title1-footer'>Você pode se interessar</h1>
                        <div className='footer-links-div'>
                            <div className='footer-links-div-div'>
                                <a href='/sites'>
                                    <p className='link-footer-web'>Sites</p>
                                </a>
                                <a href='/seguranca'>
                                    <p className='link-footer-web'>Segurança digital</p>
                                </a>
                                <a href='/aplicativos'>
                                    <p className='link-footer-web'>Aplicativos</p>
                                </a>
                            </div>
                            <div className='footer-links-div-div'>
                                <a href='/orcamentos'>
                                    <p className='link-footer-web'>Orçamentos</p>
                                </a>
                                <a href='/sobre'>
                                    <p className='link-footer-web'>Sobre nós</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='div-footer'>
                        <h1 className='footer-title title2-footer'>Conecte-se!</h1>
                        <div className='footer-connect-div'>
                            <a href='https://www.instagram.com' className='icon-footer' target='_blank'>
                                <img src={instagram}/>
                            </a>
                            <a href='https://www.facebook.com' className='icon-footer' target='_blank'>
                                <img src={facebook} />
                            </a>
                            <a href='https://www.linkedin.com/company/littera-it/' className='icon-footer' target='_blank'>
                                <img src={linkedin} />
                            </a>
                            <a href='https://www.twitter.com' className='icon-footer' target='_blank'> 
                                <img src={twitter} />
                            </a>
                        </div>
                    </div>
                    <div className='div-footer'>
                        <h1 className='footer-title title2-footer'>Contato</h1>
                        <div className='footer-connect-div'>
                            <a href='https://wa.me/5513996237281?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!' className='icon-footer' target='_blank'>
                                <img src={whatsapp} />
                            </a>
                            <a href='https://t.me/leopompeu' className='icon-footer' target='_blank'>
                                <img src={telegram} />
                            </a>
                            <a href='mailto:contato@litteratech.com.br?subject=Littera&body=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Littera!' className='icon-footer' target='_blank'>
                                <img src={email} />
                            </a>
                        </div>
                    </div>
                    <div className='div-footer'>
                        <h1 className='footer-title title4-footer'>Nosso QG</h1>
                        <a href='https://www.google.com.br/maps/place/R.+Jaú,+880+-+Boqueirão,+Praia+Grande+-+SP,+11700-270/@-24.0103153,-46.4154091,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce1db10f7116ed:0x6fa4eff42d67b32e!8m2!3d-24.0103153!4d-46.4132151!16s%2Fg%2F11g1gq6y7v' target='_blank'>
                            <img src={map} className='map-web'/>
                        </a>
                    </div>
                </div>
                <h1 className='love-web'>Feito com 💜 por Littera</h1>
            </div>
        )
        
    }

}

export default Footer