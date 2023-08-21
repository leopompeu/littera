import { useState, useEffect } from 'react'
import { menu, x, littera, line, linep } from '../assets'
import { navLinks } from '../constants'
import { Divide as Hamburger } from 'hamburger-react'

import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

import styles from '../style'

import { isMobile } from 'react-device-detect'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion'
import { HashLink as Link } from 'react-router-hash-link'


const MyNavBar = () => {
  const [isOpen, setOpen] = useState(false)
  const location = useLocation();

  let navigate = useNavigate();
  
  if(isMobile) {
    return (
      <div className={`w-full ${isOpen ? 'bg-header-gradient' : 'bg-header'} `} >
        <nav className="w-full flex py-3 navbar">
          <Accordion className='w-full'>
              <AccordionItem>
              <Link className='littera-mobile' smooth to="/" >
                  <img src={littera} alt="littera" className=" littera-mobile w-[100px]"/>
              </Link>

                <AccordionHeader>
                  <div className='hamburger'><Hamburger className='hamburger' color='#FFFFFF' size={20} toggled={isOpen} toggle={setOpen} rounded /></div>
                  
                </AccordionHeader>
                <AccordionBody className='accordion z10'>
                  <ul className="list-none flex flex-col justify-end items-start flex-1 z10">
                    {navLinks.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'margin15'}  text-white `}
                      >
                        <a onClick={() => {
                          let path = nav.id;
                          navigate(path);
                        }} className="text-white">{nav.title}</a>
                        <img src={index === navLinks.length - 1 ? '' : linep} className={location.pathname === "/" + nav.id ? 'line-big mt-1' : 'mt-1'}/>
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
        <div className={`${styles.paddingX} w-full bg-header`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <Link smooth className='littera' to={document.location.pathname != '/' ? "/" : "/#"}>
              <img src={littera} alt="littera" className="w-[124px] [h-32px] littera-logo"/>
            </Link>
             <ul className="list-none list sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins text-header font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white `}
                > 
                  <a onClick={() => {
                    let path = nav.id;
                    navigate(path);
                  }} className={`text-header ${location.pathname === "/" + nav.id ? 'text-header-selected' : ''}`}>{nav.title}</a>

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
                      <a onClick={() => {
                        let path = nav.id;
                        navigate(path);
                      }} className="text-white">{nav.title}</a>
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