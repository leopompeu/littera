import React from 'react'
import { isMobile } from 'react-device-detect'
import { timeline, timelineWeb, title2, title2Apps } from '../assets'

import styles from '../style'

const Timeline = () => {
    if(isMobile){
        return (
            <section id="timeline" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='timeline-div'>
                    <img src={ title2Apps } className='title-timeline'/>
                    <img src={timeline} className='timeline'/>
                </div>
            </section>
          )
    } else {
        return (
            <section id="timeline" className={`md:flex-row flex-col`}>
                <div className='timeline-div'>
                    <img src={ title2Apps } className='title-timeline-web'/>
                    <img src={ timelineWeb } className='timeline-web'/>
                </div>
            </section>
          )
    }
}

export default Timeline