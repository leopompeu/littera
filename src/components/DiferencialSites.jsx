import React from 'react'
import { isMobile } from 'react-device-detect'
import { image1, image2 } from '../assets'

import styles from '../style'

const DiferencialSites = () => {
    if(isMobile){
        return (
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className='bg-div3-sites container' >
                    <h1 className='title-diferencial-site'>POR QUE FAZER UM SITE?</h1>
                    <div className='text-div'>
                        <img className='image1-text' src={image1}/>
                        <p className='text-diferencial-site'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem at leo placerat auctor. Nullam suscipit augue sit amet ligula varius, sodales finibus orci mollis. Cras venenatis imperdiet consequat. Nulla eget vehicula eros. Vivamus dapibus faucibus nunc, vel finibus lacus condimentum ultricies. Nulla justo nibh, semper eu urna ac, finibus suscipit magna.</p>
                    </div>
                    <div className='text-div2'>
                        <p className='text-diferencial-site2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem at leo placerat auctor. Nullam suscipit augue sit amet ligula varius, sodales finibus orci mollis. Cras venenatis imperdiet consequat. Nulla eget vehicula eros. Vivamus dapibus faucibus nunc, vel finibus lacus condimentum ultricies. Nulla justo nibh, semper eu urna ac, finibus suscipit magna.</p>
                        <img className='image1-text2' src={image2}/>
                    </div>
                </div>
            </section>
          )
    }
}

export default DiferencialSites