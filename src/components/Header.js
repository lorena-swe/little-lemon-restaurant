import React, { useState } from 'react'
import { Link } from "react-router-dom"
import lemonLogo from '../assets/Logo.svg'
import cartIcon from '../assets/Basket.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
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
          <li><Link to='/about' className='nav-link'>About</Link></li>
          <li><Link to='/menu' className='nav-link'>Menu</Link></li>
          <li><Link to='/reservations' className='nav-link'>Reservations</Link></li>
          <li><Link to='/order-online' className='nav-btn'>Order Online</Link></li>
          <li><Link to='/cart' className='nav-link nav-cart'><img src={cartIcon} alt="Cart"/></Link></li>

          {/* <li><a className='nav-link' href="/" role="button">Home</a></li>
          <li><a className='nav-link' href="/about" role="button">About</a></li>
          <li><a className='nav-link' href="/menu" role="button">Menu</a></li>
          <li><a className='nav-link' href="/reservations" role="button">Reservations</a></li>
          <li><a className='nav-btn' href="/order-online" role="button">Order Online</a></li>
          <li><a className='nav-link nav-cart' href="/cart" role="button"><img src={cartIcon} alt="Cart"/></a></li> */}
        </ul>
      </nav>
  </header>
  )
}

export default Header;