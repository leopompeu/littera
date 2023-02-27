import { useState, useEffect } from 'react'
import { menu, x, littera, line, linep } from '../assets'
import { navLinks } from '../constants'
import { Divide as Hamburger } from 'hamburger-react'

import styles from '../style'

import { isMobile } from 'react-device-detect'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion'

const MyNavBar = () => {
  const [isOpen, setOpen] = useState(false)
  

  if(isMobile) {
    return (
      <div className={`${styles.paddingX} w-full ${isOpen ? 'bg-header-gradient' : 'bg-header'} `} >
        <nav className="w-full flex py-3 navbar">
            <Accordion className='w-full'>
              <AccordionItem>
                <AccordionHeader>
                  <img src={littera} alt="littera" className=" littera w-[70px] [h-14px] "/>
                  <div className='hamburger'><Hamburger className='hamburger' color='#FFFFFF' size={20} toggled={isOpen} toggle={setOpen} rounded /></div>
                  
                </AccordionHeader>
                <AccordionBody className='accordion z10'>
                  <ul className="list-none flex flex-col justify-end items-start flex-1 z10">
                    {navLinks.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'margin15'}  text-white `}
                      >
                        <a href={`/${nav.id === 'home' ? '' : nav.id}`} className="text-white">{nav.title}</a>
                        <img src={index === navLinks.length - 1 ? '' : linep} className={`mt-1`}/>
                      </li>
                    ))}
                  </ul>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
        </nav>
      </div>
    )
  } else {
      return (
        <div className={`${styles.paddingX} w-full `}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
      
            <img src={littera} alt="littera" className="w-[124px] [h-32px]"/>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white `}
                >
                  <a href={`#${nav.id}`} className="text-white">{nav.title}</a>

                </li>
              ))}
            </ul>
      
            <div className='sm:hidden flex flex-1 justify-end items-start'>
              
              <div className={`${isOpen ? 'flex' : 'hidden'} p-6 bg-header-gradient absolute accordion top-12 right-0  my-2 w-full rounded-b-lg accordion transition durantion-200`}>
                <ul className="list-none flex flex-col justify-end items-start flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'margin15'}  text-white `}
                    >
                      <a href={`/${nav.id === 'home' ? '' : nav.id}`} className="text-white">{nav.title}</a>
                      <img src={index === navLinks.length - 1 ? '' : linep} className={`mt-1`}/>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

          </nav>
        </div>
      )
  }
}

export default MyNavBar