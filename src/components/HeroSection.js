import { Link } from "react-router-dom"
import heroImage from '../assets/restauranfood.jpg'
import '../App.css'

function HeroSection () {

  const heroText = 'We are a family owned Mediterranean restaurant, focused on traditional recipes serviced with a modern twist.'

  return (
    <div className="hero-section">
      <div className='sub-section'>

        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <h4>{heroText}</h4>
          <button>
            <Link to='/booking-page' className='reserve-btn'>Reserve a table</Link>
          </button>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Little Lemon Hero" />
        </div>

      </div>
    </div>
  )
}

export default HeroSection;