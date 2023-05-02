import styles from "../style";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";

import { MyNavBar, Div1, Servicos, Diferencial, Portfolio, Animacao, Contato, ContatoHome, CarrouselTeam } from "../components";

import React from 'react'
import Animacao2 from "../components/Animacao2";
import { whatsapp } from "../assets";

const Home = () => {

    return (
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
                <Portfolio />
                <Animacao2 />
                <ContatoHome />
                <a target='_blank' href="https://wa.me/5513996237281?text=Olá!%20Desejo%20saber%20mais%20sobre%20os%20serviços%20da%20Littera!" className="float">
                </a>
              </div>
            </div>
    
          </div>
      )
    
}

export default Home