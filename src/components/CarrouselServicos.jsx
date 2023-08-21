import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'
import { isMobile } from 'react-device-detect'
import { card1, card1web, card2web, card3web, card2, card3 } from '../assets'
import { Carousel as CarouselWeb } from 'react-bootstrap'
import styles from '../style'
import { useNavigate } from 'react-router-dom'


function CardServicos() {

    const[modalOpen, setModalOpen] = useState(false);
    const [thisAnimation, setAnimation] = useState({animation: 'slide-open'})
    const [thisAnimation2, setAnimation2] = useState({animation: 'fade-in2'})
    
  let navigate = useNavigate();

  const routeChangeSites = () =>{ 
    let path = `sites`; 
    navigate(path);
  }
  
  const routeChangeApps = () =>{ 
    let path = `aplicativos`; 
    navigate(path);
  }

  const routeChangeSeguranca = () =>{ 
    let path = `seguranca`; 
    navigate(path);
  }

    if(isMobile){
        return (
            <div className='carousel-mobile' data-aos="fade-up">
                
            </div>
        )
    } else {
        return(
            <section id="carousel-servicos" className={`flex flex-col`}>
                <CarouselWeb className='carousel-web'>
                    <CarouselWeb.Item> 
                        <img src={card1web} className='div-carousel-servicos-item'/>
                        <div>
                            <h1 className='txt-carousel-servicos'>Sites responsivos</h1>
                            <p className='text-carousel-servicos-descricao'>Impulsione seu negocio com sites modernos, dinâmicos, seguros e responsivos!</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button">Saiba Mais</button>
                            </div>
                        </div>
                    </CarouselWeb.Item>
                    <CarouselWeb.Item> 
                        <img src={card2web} className='div-carousel-servicos-item'/>
                        <div>
                            <h1 className='txt-carousel-servicos'>Segurança digital</h1>
                            <p className='text-carousel-servicos-descricao'>Garanta que você e seus clientes estão protegidos à ataques hacker ou treine seus funcionários para evitar golpes e fraudes!</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button">Saiba Mais</button>
                            </div>
                        </div>
                    </CarouselWeb.Item>
                    <CarouselWeb.Item> 
                        <img src={card3web} className='div-carousel-servicos-item'/>
                        <div>
                            <h1 className='txt-carousel-servicos'>Aplicativos</h1>
                            <p className='text-carousel-servicos-descricao'>Automatize seu negócio ou divulgue ainda mais sua marca com aplicativos leves e modernos!</p>
                            <div  className='div-button-servicos'>
                                <button className="saiba-mais-button">Saiba Mais</button>
                            </div>
                        </div>
                    </CarouselWeb.Item>
                </CarouselWeb>
            </section>
        )
        
    }
}
  

export default CardServicos