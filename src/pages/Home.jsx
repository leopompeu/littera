import styles from "../style";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";

import { MyNavBar, Div1, Servicos, Diferencial, Portfolio, Animacao, Contato, ContatoHome, CarrouselTeam } from "../components";

import React from 'react'
import Animacao2 from "../components/Animacao2";
import { whatsapp } from "../assets";
import { isMobile } from "react-device-detect";
import DocumentMeta from "react-document-meta";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const meta = {
    title: 'Littera Tech | Consultoria de TI',
    description: 'Alavanque seu negócio com a Littera Tech: Consultoria de TI, criação de sites e segurança da informação. Potencialize sua empresa agora mesmo!',
    canonical: 'https://litteratech.com.br/',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'consultoria de ti,ti,tecnologia,criação de sites,criação de aplicativos,segurança da informação,site,app,aplicativos,security,web security'
        }
    }
  }

    return (
      <DocumentMeta {...meta}>
        <div className="bg w-full overflow-hidden">            
            {/* Div1 */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Div1/>
              </div>
            </div>
    
            {/* Body */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Servicos />
                <Animacao  />
                <Diferencial />
                <div className={`${!isMobile ? "bg-double-div" : ""} ${ !isMobile && window.innerWidth >= 2000 ? "bg-double-div-big" : ""}`}>
                  <Portfolio />
                  <Animacao2 />
                </div>
                <ContatoHome />
              </div>
            </div>
          </div>
        </DocumentMeta>
      )
    
}

export default Home