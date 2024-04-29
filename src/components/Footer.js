import '../App.css'
import lemonLogo from '../assets/logo_white_long.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons"

function Footer () {
  const socials = [
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com",
    },
    {
      icon: faDiscord,
      url: "https://discord.com",
    }
  ]

  return (
    <footer>
      {/* Logo */}
      <img src={lemonLogo} alt="Little Lemon Logo" />

      {/* Doormat navigation */}
      <ul className='doormat-links'>
        <li><a href="/home" role="button">Home</a></li>
        <li><a href="/about" role="button">About</a></li>
        <li><a href="/menu" role="button">Menu</a></li>
        <li><a href="/reservations" role="button">Reservations</a></li>
        <li><a href="/order-online" role="button">Order Online</a></li>
        <li><a href="/login" role="button">Login</a></li>
      </ul>

      {/* Contacts */}
      <ul className='contacts'>
        <li><a href="/contacts" role="button">Contacts</a></li>
      </ul>

      {/* Social Media Links */}
      <ul className='social-links'>
        {socials.map(({icon, url}) => (
          <li key={url}>
            <a className='social-icon' href={url} role="button" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={icon} size="2x" key={url} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer;