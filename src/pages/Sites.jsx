import React from 'react'

import { isMobile } from 'react-device-detect'
import DiferencialSites from '../components/DiferencialSites'
import Div1Sites from '../components/Div1Sites'
import Footer from '../components/Footer'
import Orcamento from '../components/Orcamento'
import styles from '../style'
import { useEffect } from 'react';
import DocumentMeta from 'react-document-meta'

const Sites = () => {

  const meta = {
    title: 'Sites | Littera Tech | Consultoria de TI',
    description: 'Transforme seu negócio com a Consultoria de TI e Criação de Sites. Garanta já uma presença online de sucesso!',
    canonical: 'https://litteratech.com.br/sites',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'consultoria de ti,ti,tecnologia,criação de sites,desenvolvimento de sites,segurança da informação,site,web,website,web app,wordpress,react,aplicativos,security,web security'
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
                <Div1Sites/>
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

export default Sites