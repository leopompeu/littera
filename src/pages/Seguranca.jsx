import React from 'react'

import { isMobile } from 'react-device-detect'
import DiferencialSeguranca from '../components/DiferencialSeguranca'
import Div1Seguranca from '../components/Div1Seguranca'
import Footer from '../components/Footer'
import OrcamentoSeguranca from '../components/OrcamentoSeguranca'
import styles from '../style'
import { useEffect } from 'react';
import DocumentMeta from 'react-document-meta'

const Seguranca = () => {

  const meta = {
    title: 'Segurança da Informação | Littera Tech | Consultoria de TI',
    description: '"Proteja seus dados agora! Consultoria de TI em Segurança da Informação. Garanta a integridade dos seus negócios.',
    canonical: 'https://litteratech.com.br/seguranca',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'consultoria de ti,ti,tecnologia,black hat,red hat,white hat,segurança ofensiva,segurança defensiva,segurança da informação,android,ios,mobile,automação,aplicativos,security,web security'
        }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    return (
      <DocumentMeta {...meta}>
        <div className="bg w-full overflow-hidden">            
            {/* Div1Sites */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Div1Seguranca/>
              </div>
            </div>
    
            {/* Body */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>

              </div>
            </div>
    
          </div>
          </DocumentMeta>
    )
}

export default Seguranca