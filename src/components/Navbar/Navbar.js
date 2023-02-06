import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { links, social } from '../../Asset/data/navdata'
import logo from '../../Asset/img/logo.svg'
import { FaFacebook, FaLinkedin, FaTwitter, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false)
  const [stickyClass, setStickyClass] = useState('')
  const [isOpenLink, setIsOpenLink] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  // console.log(linksContainerRef.current)

  // useEffect(() => {}, [])

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (isToggle) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } 
    else if() {
      linksContainerRef.current.style.height = `0px`
    }
    // console.log(linksHeight)
  }, [isToggle])

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)

    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const stickNavbar = () => {
    let windowHeight = window.scrollY
    if (windowHeight > 60) {
      setStickyClass('fixed-nav')
    } else {
      setStickyClass('')
    }
  }
  // console.log(isToggle)

  return (
    <nav className={`${stickyClass}`}>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='Logo' />
          </Link>
          <button className='nav-toggle' onClick={handleToggle}>
            <FaBars />
          </button>
        </div>
        {/* using useRef  */}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/'> About </Link>
            </li>
            <li>
              <Link to='/'> Projects </Link>
            </li>
            <li>
              <Link to='/users' onClick={() => setIsOpenLink(!isOpenLink)}>
                {' '}
                Users{' '}
              </Link>
            </li>
            <li>
              <Link to='/'> Random </Link>
            </li>
          </ul>
        </div>
        {/* Using The ternary operator  */}
        {/* {isToggle ? (
          <div className='show-container links-container'>
            <ul className='links'>
              <li>
                <Link to='/'> Home </Link>
              </li>
              <li>
                <Link to='/'> About </Link>
              </li>
              <li>
                <Link to='/'> Projects </Link>
              </li>
              <li>
                <Link to='/'> Blog </Link>
              </li>
              <li>
                <Link to='/'> Random </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className='links-container'>
            <ul className='links'>
              <li>
                <Link to='/'> Home </Link>
              </li>
              <li>
                <Link to='/'> About </Link>
              </li>
              <li>
                <Link to='/'> Projects </Link>
              </li>
              <li>
                <Link to='/'> Blog </Link>
              </li>
              <li>
                <Link to='/'> Random </Link>
              </li>
            </ul>
          </div>
        )} */}
        {/* css class toggle  */}
        {/* <div
          className={`${
            isToggle ? 'show-container links-container' : 'links-container'
          }`}
        >
          <ul className='links'>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/'> About </Link>
            </li>
            <li>
              <Link to='/'> Projects </Link>
            </li>
            <li>
              <Link to='/'> Blog </Link>
            </li>
            <li>
              <Link to='/'> Random </Link>
            </li>
          </ul>
        </div> */}

        <ul className='social-icons'>
          <li>
            <Link to='https://www.twitter.com'>
              <FaTwitter />
            </Link>
            <Link to='https://www.facebook.com'>
              <FaFacebook />
            </Link>
            <Link to='https://www.linkedin.com'>
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
