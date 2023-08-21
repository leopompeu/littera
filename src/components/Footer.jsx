import React from 'react'

import styles from '../style'
import { isMobile } from 'react-device-detect'
import { lineBig, map, instagram, linkedin, facebook, twitter, whatsapp, telegram, email } from '../assets'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { useEffect } from 'react';
import ReactGA from 'react-ga4'
import ReactGAOld from 'react-ga'

const Footer = () => {
    const location = useLocation();

    let navigate = useNavigate();

    
  const eventTrack = (category, action, label) => {
    console.log("GA event:", category, ":", action, ":", label);
      ReactGAOld.event({
        category: category,
        action: action,
        label: label,              
      })
  }

    const routeChangeSites = () =>{ 
        let path = `../sites`; 
        navigate(path);
      }
      
      const routeChangeApps = () =>{ 
        let path = `../aplicativos`; 
        navigate(path);
      }
    
      const routeChangeSeguranca = () =>{ 
        let path = `../seguranca`; 
        navigate(path);
      }
      
      const routeChangeSobre = () =>{ 
        let path = `../sobre`; 
        navigate(path);
      }
      
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    if(isMobile){
        return (
            <div className={`flex md:flex-row flex-col ${styles.paddingY} footer-component ${location.pathname === "/" ? 'footer-home-mobile' : 'footer-sites-mobile'}`}>
                <img src={lineBig} className='footer-line'/>
                <div>
                    <div className='div1-footer'>
                        <h2 className='footer-text'>Conecte-se</h2>
                        <h2 className='footer-text text-left'>Contato</h2>
                    </div>
                    <div className='div2-footer'>
                        <div className='icon-first'>
                            <a href='https://www.instagram.com/litteratech/'>
                                <img className='icon-button' src={instagram} alt='Botão para o instagram da consultoria de TI Littera'/>
                            </a>
                        </div>
                        <a href='https://www.facebook.com/litteratech'>
                            <img className='icon-button icon-margin' src={facebook} alt='Botão para o Facebook da consultoria de TI Littera'/>
                        </a>
                        <a href='https://www.linkedin.com/company/littera-it/'>
                            <img className='icon-button icon-margin' src={linkedin} alt='Botão para o Linkedin da consultoria de TI Littera'/>
                        </a>
                        <a href='https://twitter.com/LitteraTech'>
                            <img className='icon-button icon-margin' src={twitter} alt='Botão para o Twitter da consultoria de TI Littera'/>
                        </a>
                        <a href='mailto:leopompeu1209@gmail.com?subject=Littera&body=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Littera!'>
                            <img className='icon-button-email icon-margin-end icon-end' src={email} alt='Botão para o Email da consultoria de TI Littera'/>
                        </a>
                        <a href='https://t.me/leopompeu'>
                            <img className='icon-button icon-margin-end icon-end2' src={telegram} alt='Botão para o Telegram da consultoria de TI Littera'/>
                        </a>
                        <a id='wpp' onClick={eventTrack.bind(this, "Home", "Botão de wpp", "wpp")} 
                          href='https://wa.me/5513981741112?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!'>
                            <img className='icon-button icon-margin-end icon-end3' src={whatsapp} alt='Botão para o Whatsapp da consultoria de TI Littera'/>
                        </a>
                    </div>
                    {/* <div className='div3-footer'>
                        <h1 className='footer-text'>Você pode se interessar</h1>
                        <h1 className='footer-text text-left'>Nosso QG</h1>
                    </div>
                    <div className='div4-footer'>
                        <div className='div-div4-footer'>
                            <div>
                                <a onClick={routeChangeSites}>
                                    <h1 className='text-footer-interest'>Sites</h1>
                                </a>
                                <a onClick={routeChangeSeguranca}>
                                    <h1 className='text-footer-interest'>Segurança digital</h1>
                                </a>
                                <a onClick={routeChangeApps}>
                                    <h1 className='text-footer-interest'>Aplicativos</h1>
                                </a>
                            </div>
                            <div className='div-div-div4-footer'>
                                <a href='/orcamentos'>
                                    <h1 className='text-footer-interest'>Orçamentos</h1>
                                </a>
                                <a onClick={routeChangeSobre}>
                                    <h1 className='text-footer-interest'>Sobre nós</h1>
                                </a>                         
                            </div>
                        </div>
                        <a href='https://www.google.com.br/maps/place/R.+Jaú,+880+-+Boqueirão,+Praia+Grande+-+SP,+11700-270/@-24.0103153,-46.4154091,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce1db10f7116ed:0x6fa4eff42d67b32e!8m2!3d-24.0103153!4d-46.4132151!16s%2Fg%2F11g1gq6y7v'>
                            <img src={map} className='map'/>
                        </a> 
                    </div>*/}
                    <h3 className='love'>Feito com 💜 por Littera</h3>
                </div>
            </div>
          )
    } else {
        return(
            <div className={`flex flex-col ${location.pathname === "/" ? 'footer-home' : 'footer-sites'} ${window.innerWidth >= 1330 && !isMobile ? 'footer-home-big' : 'footer-home'} ${window.innerWidth >= 2000 && !isMobile ? 'footer-home-big-big' : 'footer-home'} `} >
                <img src={lineBig} className='footer-line-web'/>
                <div className='footer-component-web'>
                    {/* <div className='div-footer'>
                        <h1 className='footer-title title1-footer'>Você pode se interessar</h1>
                        <div className='footer-links-div'>
                            <div className='footer-links-div-div'>
                                <a onClick={routeChangeSites}>
                                    <p className='link-footer-web'>Sites</p>
                                </a>
                                <a onClick={routeChangeSeguranca}>
                                    <p className='link-footer-web'>Segurança digital</p>
                                </a>
                                <a onClick={routeChangeApps}>
                                    <p className='link-footer-web'>Aplicativos</p>
                                </a>
                            </div>
                            <div className='footer-links-div-div'>
                                <a onClick={routeChangeApps}>
                                    <p className='link-footer-web'>Orçamentos</p>
                                </a>
                                <a onClick={routeChangeSobre}>
                                    <p className='link-footer-web'>Sobre nós</p>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div className='div-footer'>
                        <h2 className='footer-title title2-footer'>Conecte-se!</h2>
                        <div className='footer-connect-div'>
                            <a href='https://www.instagram.com/litteratech/' className='icon-footer' target='_blank'>
                                <img src={instagram} alt='Botão para o Instagram da consultoria de TI Littera'/>
                            </a>
                            <a href='https://www.facebook.com/litteratech' className='icon-footer' target='_blank'>
                                <img src={facebook} alt='Botão para o Facebook da consultoria de TI Littera'/>
                            </a>
                            <a href='https://www.linkedin.com/company/littera-it/' className='icon-footer' target='_blank'>
                                <img src={linkedin} alt='Botão para o Linkedin da consultoria de TI Littera'/>
                            </a>
                            <a href='https://twitter.com/LitteraTech' className='icon-footer' target='_blank'> 
                                <img src={twitter} alt='Botão para o Twitter da consultoria de TI Littera'/>
                            </a>
                        </div>
                    </div>
                    <div className='div-footer'>
                        <h2 className='footer-title title2-footer'>Contato</h2>
                        <div className='footer-connect-div'>
                            <a  id='wpp' onClick={eventTrack.bind(this, "Home", "Botão de wpp", "wpp")} 
                            href='https://wa.me/5513981741112?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!' className='icon-footer' target='_blank'>
                                <img src={whatsapp} alt='Botão para o Whatsapp da consultoria de TI Littera'/>
                            </a>
                            <a href='https://t.me/leopompeu' className='icon-footer' target='_blank'>
                                <img src={telegram} alt='Botão para o Telegram da consultoria de TI Littera'/>
                            </a>
                            <a href='mailto:contato@litteratech.com.br?subject=Littera&body=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Littera!' className='icon-footer' target='_blank'>
                                <img src={email} alt='Botão para o Email da consultoria de TI Littera'/>
                            </a>
                        </div>
                    </div>
{/*                     <div className='div-footer'>
                        <h1 className='footer-title title4-footer'>Nosso QG</h1>
                        <a href='https://www.google.com.br/maps/place/R.+Jaú,+880+-+Boqueirão,+Praia+Grande+-+SP,+11700-270/@-24.0103153,-46.4154091,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce1db10f7116ed:0x6fa4eff42d67b32e!8m2!3d-24.0103153!4d-46.4132151!16s%2Fg%2F11g1gq6y7v' target='_blank'>
                            <img src={map} className='map-web'/>
                        </a>
                    </div> */}
                </div>
                <h3 className={`${window.innerWidth >= 2000 && !isMobile ? 'love-web-big' : 'love-web'}`}>Feito com 💜 por Littera</h3>
            </div>
        )
        
    }

}

export default Footer