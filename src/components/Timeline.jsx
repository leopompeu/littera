import React from 'react'
import { isMobile } from 'react-device-detect'
import { timeline, title2 } from '../assets'

import styles from '../style'

const Timeline = () => {
    if(isMobile){
        return (
            <section id="timeline" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='timeline-div'>
                    <img src={ title2 } className='title-timeline'/>
                    <img src={timeline} className='timeline'/>
                </div>
            </section>
          )
    }
}

export default Timeline