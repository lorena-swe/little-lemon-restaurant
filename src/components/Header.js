import React, { useState } from 'react'
import { Link } from "react-router-dom"
import lemonLogo from '../assets/Logo.svg'
import cartIcon from '../assets/Basket.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const displayInfoToast = () => {
    // Display confirmation toast
    toast.info('This feature is currently under development.\nSorry to disappoint! 🍋')
  }

  return (
    <header>
      <ToastContainer />

      {/* Little Lemon Logo (long) */}
      <img src={lemonLogo} alt="Little Lemon Logo" className='header-logo' />

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <FontAwesomeIcon className='xmark' icon={faXmark} size='1x' />
        ) : (
          <FontAwesomeIcon className='bars' icon={faBars} size='1x' />
        )}
      </div>

      <nav>
      {/* <nav> */}
        {/* Asset20 for background img */}
        <ul className={isMenuOpen ? 'open-menu' : 'nav-list'}>
          <li><Link to='/' className='nav-link'>Home</Link></li>
          <li className='nav-link' onClick={displayInfoToast}>About</li>
          <li><Link to='/menu' className='nav-link'>Menu</Link></li>
          <li><Link to='/reservations' className='nav-link'>Reservations</Link></li>
          <li className='nav-btn' onClick={displayInfoToast}>Order Online</li>
          {/* <li><Link to='/cart' className='nav-link nav-cart'><img src={cartIcon} alt="Cart"/></Link></li> */}
        </ul>
      </nav>
  </header>
  )
}

export default Header;