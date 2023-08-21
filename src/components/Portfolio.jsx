import React from 'react'
import styles from '../style'

import { celulares, celulares2, iphone, left, leftY, right, rightY, webFv, webSolucionare } from '../assets'

import { isMobile } from 'react-device-detect'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useState } from 'react'
import { portfolio } from '../constants'

const Portfolio = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  })

  var [thisIndex, setIndex] = useState(0)
  const[thisState, setState] = useState(1)
  const[thisTitulo, setTitulo] = useState(portfolio[thisIndex].name)
  const[thisTexto, setTexto] = useState(portfolio[thisIndex].text)
  const[thisLink, setLink] = useState(portfolio[thisIndex].link) 
  const[thisImg, setImg] = useState(portfolio[thisIndex].image) 
  const [thisFade, setFade] = useState({
    fade: 'fade-in'
  })

  const fade = useEffect(() => {
    const timeout = setInterval(()=>{
        setFade({
          fade: 'fade-in'
        })
    }, 250);

    return () => clearInterval(timeout)
  }, [thisFade])


  function onClickRight() {
    switch(thisIndex) {
      case 0:
        setState(2)
        setIndex(1)
        setTitulo(portfolio[1].name)
        setTexto(portfolio[1].text)
        setLink(portfolio[1].link)
        setImg(portfolio[1].image)
      break;
      case 1:
        setState(3)
        setIndex(2)
        setTitulo(portfolio[2].name)
        setTexto(portfolio[2].text)
        setLink(portfolio[2].link)
        setImg(portfolio[2].image)
      break;
      case 2:
        setState(1)
        setIndex(0)
        setTitulo(portfolio[0].name)
        setTexto(portfolio[0].text)
        setLink(portfolio[0].link)
        setImg(portfolio[0].image)
      break;
    }
  }

  function onClickLeft() {
    switch(thisIndex) {
      case 0:
        setState(3)
        setIndex(2)
        setTitulo(portfolio[2].name)
        setTexto(portfolio[2].text)
        setLink(portfolio[2].link)
        setImg(portfolio[2].image)
      break;
      case 1:
        setState(1)
        setIndex(0)
        setTitulo(portfolio[0].name)
        setTexto(portfolio[0].text)
        setLink(portfolio[0].link)
        setImg(portfolio[0].image)
      break;
      case 2:
        setState(2)
        setIndex(1)
        setTitulo(portfolio[1].name)
        setTexto(portfolio[1].text)
        setLink(portfolio[1].link)
        setImg(portfolio[1].image)
      break;
    }

  }

  if(isMobile){
    return (
      <section id="diferencial" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

          <h2 className='text-portfolio'>VEJA ALGUNS DE</h2>
          <h2 className='text-portfolio2'>NOSSOS TRABALHOS</h2>
          <div className='div-portfolio-item-mobile' data-aos="fade-right">
            <div className='iphone-mobile'>
              <div className={`iphone-inner ${thisFade.fade}`}>
                <img src={thisImg} alt='Case da consultoria de TI Littera'></img>
              </div>
            </div>
            <div className=''>
              <h3 className={`name-portfolio-mobile ${thisFade.fade}`}>{thisTitulo}</h3>
              <a target="_blank" href={'https://' + thisLink + "/"}><p className={`link-portfolio-mobile ${thisFade.fade}`}>{thisLink.replace('?platform=mobile', '')}</p></a>
              <p className={`text-portfolio-item-mobile ${thisFade.fade}`}>{thisTexto}</p>
              <div className='div-buttons-mobile'>
                <img src={leftY} onClick={()=> { setTimeout(onClickLeft,200); setFade({fade: 'fade-out'}); fade }} className='buttons-portfolio button1-portfolio-mobile' alt='Botão para o último case'/>
                <img src={rightY} onClick={()=> { setTimeout(onClickRight,200);  setFade({fade: 'fade-out'}); fade  }} className='buttons-portfolio' alt='Botão para o próximo case'/>
              </div>
            </div>
          </div>
        {/* <div className='bg-div-fv'>
          <div data-aos="fade-left">
            <img src={celulares} className='image-fv' />
            <h1 className='text-fv'>FV Publicidades</h1>
          </div>
        </div>
        <div className='bg-div-solucionare'>
          <div data-aos="fade-right">
            <img src={celulares2} className='image-solucionare'/>
            <h1 className='text-solucionare'>Solucionare</h1>
          </div>
        </div> */}

      </section>
    )
  } else {
    return (
      <section id="diferencial" className={`flex flex-col ${styles.paddingY} ${window.innerWidth >= 2000 ? 'div-effect-diferencial-big' : 'div-effect-diferencial'}`}>
        <div className='div-portfolio'>
          <h2 className='text-portfolio-web'>VEJA ALGUNS DE</h2>
          <h2 className='text-portfolio-web2'>NOSSOS TRABALHOS</h2>
          <div className='div-portfolio-item' data-aos="fade-right">
            <div className='div-portfolio-item-data'>
              <h3 className={`name-portfolio ${thisFade.fade}`}>{thisTitulo}</h3>
              <a target="_blank" href={'https://' + thisLink + "/"}><p className={`link-portfolio ${thisFade.fade}`}>{thisLink.replace('?platform=mobile', '')}</p></a>
              <p className={`text-portfolio-item ${thisFade.fade}`}>{thisTexto}</p>
              <div className='div-buttons'>
                <img src={leftY} onClick={()=> { setTimeout(onClickLeft,200); setFade({fade: 'fade-out'}); fade }} className='buttons-portfolio button1-portfolio' alt='Botão para o último case'/>
                <img src={rightY} onClick={()=> { setTimeout(onClickRight,200);  setFade({fade: 'fade-out'}); fade  }} className='buttons-portfolio' alt='Botão para o próximo case'/>
              </div>
            </div>
            <div className='iphone'>
              <div className={`iphone-inner ${thisFade.fade}`}>
                <img src={thisImg} alt='Case da consultoria de TI Littera'></img>
              </div>
            </div>
          </div>
          {/* <div className='bg-fv-web'>
            <br/>
            <img className='image-mobile-fv' src={celulares}/>
            <img className='image-web-fv' src={webFv}/>
            <h1 className='text-fv-web'>FV Publicidades</h1>
          </div>
          <div className='bg-solucionare-web'>
            <br/>
            <img className='image-mobile-solucionare' src={celulares2}/>
            <img className='image-web-solucionare' src={webSolucionare}/>
            <h1 className='text-solucionare-web'>Solucionare</h1>
          </div> */}
        </div>
      </section>
    )
  }

}

export default Portfolio