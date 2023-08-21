import React from 'react'

import { isMobile } from 'react-device-detect'
import styles from '../style'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { leftY, rightY } from '../assets'
import { useState } from 'react'
import { diferencial } from '../constants'

const Diferencial = () => {
  var thisIndex = 0

  const[thisImg, setImg] = useState(diferencial[thisIndex].image)
  const[thisIcon, setIcon] = useState(diferencial[thisIndex].icon)
  const[thisTitle, setTitle] = useState(diferencial[thisIndex].title)
  const[thisText, setText] = useState(diferencial[thisIndex].text)
  const [thisFade, setFade] = useState({
    fade: 'fade-in'
  })
  var [thisIndex, setIndex] = useState(0)


  function onClickRight() {
    switch(thisIndex) {
      case 0:
        setIndex(1)
        setTitle(diferencial[1].title)
        setText(diferencial[1].text)
        setIcon(diferencial[1].icon)
        setImg(diferencial[1].image)
      break;
      case 1:
        setIndex(2)
        setTitle(diferencial[2].title)
        setText(diferencial[2].text)
        setIcon(diferencial[2].icon)
        setImg(diferencial[2].image)
      break;
      case 2:
        setIndex(3)
        setTitle(diferencial[3].title)
        setText(diferencial[3].text)
        setIcon(diferencial[3].icon)
        setImg(diferencial[3].image)
      break;
      case 3:
        setIndex(4)
        setTitle(diferencial[4].title)
        setText(diferencial[4].text)
        setIcon(diferencial[4].icon)
        setImg(diferencial[4].image)
      break;
      case 4:
        setIndex(5)
        setTitle(diferencial[5].title)
        setText(diferencial[5].text)
        setIcon(diferencial[5].icon)
        setImg(diferencial[5].image)
      break;
      case 5:
        setIndex(6)
        setTitle(diferencial[6].title)
        setText(diferencial[6].text)
        setIcon(diferencial[6].icon)
        setImg(diferencial[6].image)
      break;
      case 6:
        setIndex(0)
        setTitle(diferencial[0].title)
        setText(diferencial[0].text)
        setIcon(diferencial[0].icon)
        setImg(diferencial[0].image)
      break;
    }
  }

  function onClickLeft() {
    switch(thisIndex) {
      case 0:
        setIndex(6)
        setTitle(diferencial[6].title)
        setText(diferencial[6].text)
        setIcon(diferencial[6].icon)
        setImg(diferencial[6].image)
      break;
      case 1:
        setIndex(0)
        setTitle(diferencial[0].title)
        setText(diferencial[0].text)
        setIcon(diferencial[0].icon)
        setImg(diferencial[0].image)
      break;
      case 2:
        setIndex(1)
        setTitle(diferencial[1].title)
        setText(diferencial[1].text)
        setIcon(diferencial[1].icon)
        setImg(diferencial[1].image)
      break;
      case 3:
        setIndex(2)
        setTitle(diferencial[2].title)
        setText(diferencial[2].text)
        setIcon(diferencial[2].icon)
        setImg(diferencial[2].image)
      break;
      case 4:
        setIndex(3)
        setTitle(diferencial[3].title)
        setText(diferencial[3].text)
        setIcon(diferencial[3].icon)
        setImg(diferencial[3].image)
      break;
      case 5:
        setIndex(4)
        setTitle(diferencial[4].title)
        setText(diferencial[4].text)
        setIcon(diferencial[4].icon)
        setImg(diferencial[4].image)
      break;
      case 6:
        setIndex(5)
        setTitle(diferencial[5].title)
        setText(diferencial[5].text)
        setIcon(diferencial[5].icon)
        setImg(diferencial[5].image)
      break6
    }

  }

  const fade = useEffect(() => {
    const timeout = setInterval(()=>{
        setFade({
          fade: 'fade-in'
        })
    }, 500);

    return () => clearInterval(timeout)
  }, [thisFade])


  useEffect(() => {
    Aos.init({duration: 2000});
  })

  if(isMobile){
    return (
      <section id="diferencial" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className='bg-div3 container' >
          <h2 className='title-div3'>POR QUE A</h2>
          <h2 className='title-div3-2'>LITTERA?</h2>
          <div className='div-effect-diferencial-mobile' data-aos="fade-left">
            <img src={thisImg} className={`image-diferencial-carrousel-mobile ${thisFade.fade}`} alt='Imagens que representam cada diferencial da Consultoria de TI Littera'/>
            <div className='content-diferencial-mobile'>
              <div className='flex'>
                <img src={thisIcon} className={`icon-diferencial-carrousel-mobile ${thisFade.fade}`}  alt='Ícones que representam cada diferencial da Consultoria de TI Littera'/>
                <h3 className={`title-item-carrossel-mobile ${thisFade.fade}`}>{thisTitle}</h3>
              </div>
              <p className={`text-item-carrossel-mobile ${thisFade.fade}`}>{thisText}</p>
              <div className='flex'>
                <img className="buttons-diferencial" onClick={()=> {setTimeout(onClickLeft,350); setFade({fade: 'fade-out'}); fade }} src={leftY} alt='Botão para o último diferencial'/>
                <img className="buttons-diferencial button-last-diferencial" onClick={()=> {setTimeout(onClickRight,350); setFade({fade: 'fade-out'}); fade() }} src={rightY} alt='Botão para o próximo diferencial'/>
              </div>
            </div>
        </div>
        </div>      
      </section>
    )
  } else {
    return (
      <section id="diferencial" className={`flex flex-col ${styles.paddingY}`}>
        <div className={`${window.innerWidth >= 2000 ? 'bg-div3-web-big' : 'bg-div3-web'}`} >
          <h2 className='title-div3-web'>POR QUE A</h2>
          <h2 className='title-div3-web2'>LITTERA?</h2>
          <div className={`${window.innerWidth >= 2000 ? 'div-effect-diferencial-dif-big' : 'div-effect-diferencial-dif'}`} data-aos="fade-left">
            <img src={thisImg} className={`image-diferencial-carrousel ${thisFade.fade}`}  alt='Imagens que representam cada diferencial da Consultoria de TI Littera'/>
            <div className='content-diferencial'>
              <div className='flex'>
                <img src={thisIcon} className={`icon-diferencial-carrousel ${thisFade.fade}`}  alt='Ícones que representam cada diferencial da Consultoria de TI Littera'/>
                <h3 className={`title-item-carrossel ${thisFade.fade}`}>{thisTitle}</h3>
              </div>
              <p className={`text-item-carrossel ${thisFade.fade}`}>{thisText}</p>
              <div className='flex'>
                <img className="buttons-diferencial" onClick={()=> {setTimeout(onClickLeft,350); setFade({fade: 'fade-out'}); fade }} src={leftY} alt='Botão para o último diferencial'/>
                <img className="buttons-diferencial button-last-diferencial" onClick={()=> {setTimeout(onClickRight,350); setFade({fade: 'fade-out'}); fade() }} src={rightY}  alt='Botão para o próximo diferencial'/>
              </div>
            </div>
          </div>
         
        </div>
      
      </section>
    )
  }
}

export default Diferencial