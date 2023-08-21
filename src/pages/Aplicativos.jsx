import React from 'react'

import { isMobile } from 'react-device-detect'
import DiferencialApps from '../components/DiferencialApps'
import Div1Apps from '../components/Div1Apps'
import Footer from '../components/Footer'
import OrcamentoApps from '../components/OrcamentoApps'
import styles from '../style'
import { useEffect } from 'react';
import DocumentMeta from 'react-document-meta'

const Aplicativos = () => {

  const meta = {
    title: 'Aplicativos | Littera Tech | Consultoria de TI',
    description: 'Desenvolvemos soluções inovadoras. Consultoria de TI especializada na criação de aplicativos para impulsionar seu negócio.',
    canonical: 'https://litteratech.com.br/aplicativos',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'consultoria de ti,ti,tecnologia,criação de aplicativoss,desenvolvimento de aplicativos,segurança da informação,android,ios,mobile,automação,aplicativos,security,web security'
        }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
      <DocumentMeta {...meta}>
        <div className="bg w-full overflow-hidden">            
            {/* Div1Apps */}
            <div className={`bg ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Div1Apps/>
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

export default Aplicativos