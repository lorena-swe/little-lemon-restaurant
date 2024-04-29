import '../App.css'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sunshine_1 from '../assets/sunshine_1.jpg'
import sunshine_2 from '../assets/sunshine_2.jpg'
import sunshine_3 from '../assets/sunshine_3.jpg'
import sunshine_4 from '../assets/sunshine_4.jpg'
import corner_1 from '../assets/corner_1.jpg'
import corner_2 from '../assets/corner_2.jpg'
import bistrot_1 from '../assets/bistrot_1.jpg'
import bistrot_2 from '../assets/bistrot_2.jpg'
import bistrot_3 from '../assets/bistrot_3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import lemonLogo from '../assets/Asset 9@4x.png'

function LocationDisplay (props) {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium purus et augue ullamcorper convallis. Cras venenatis eleifend massa. Aliquam pulvinar, tortor in congue aliquet, sapien nulla pellentesque orci, a hendrerit erat odio et nunc.'

  const locations = {
    sunshine: {
      name: 'Little Lemon Sunshine',
      address: 'Sunshine Street, nr.125, 20162, Chicago, US',
      hours: '10:30 AM - 11:30 PM',
      rating: '4.9',
      description: 'The one, the only, the amazing! Try the best of Little Lemon in our biggest restaurant: Sunshine. Healthy familiar dishes all year round, featuring seasonal foods and new additions every month!',
      images: [sunshine_1, sunshine_2, sunshine_3, sunshine_4]
    },
    corner: {
      name: 'Lemon Special Corner',
      address: 'Saint Jose Principal Street, nr.52, 20015, Chicago, US',
      hours: '09:00 AM - 10:00 PM',
      rating: '4.5',
      description: 'Healthy? Vegan? Beer? We got them all! Whether you\'re just heading off of work or meeting up with those friends you\'ve been avoiding for the past 7 weeks, no worries! Lemon Special Corner is there to offer you a relaxing and comforting experience in a new spot!',
      images: [corner_1, corner_2]
    },
    bistrot: {
      name: 'Little Lemon Bistrot',
      address: 'Grand Mall Alba (2nd floor), 20336, Chicago, US',
      hours: '08:30 AM - 02:00 AM',
      rating: '4.7',
      description: 'Feeling fancy tonight? If you\'re looking for a place that matches your sophisticated looks, we got you! Come over at Little Lemon Bistrot to have an exciting encounter with the best cuisine of Chicago!',
      images: [bistrot_3, bistrot_1, bistrot_2]
    }
  }

  const selectedLocation = locations[props.selectedLocation.value]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <div className='location-main-container'>
      {/* Images */}
      <div className='slider-container'>
        <Slider {...settings}>
          {selectedLocation.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className='carousel-img' />
            </div>
          ))}
        </Slider>

        <div className='location-rating'>
          <img src={lemonLogo} alt="Little Lemon Logo" className='loc-rating-logo' />
          <div className='rating'><span>{selectedLocation.rating}</span>/5</div>
        </div>
      </div>


      {/* Content */}
      <div className='location-container'>

        <div className='location-header'>
          <div className='restaurant-name'>
            <img src={lemonLogo} alt="Little Lemon Logo" className='loc-header-logo' />
            <h3>{selectedLocation.name}</h3>
          </div>
          <p className='restaurant-address'>{selectedLocation.address}</p>
        </div>

        <div className='location-rows'>
          <div className='loc-hours'>
            <FontAwesomeIcon className='clock-icon' icon={faClockRotateLeft} size="1x" />
            <p>{selectedLocation.hours}</p>
          </div>
          <div className='loc-description'>
            {selectedLocation.description}
          </div>
        </div>

      </div>
    </div>
  )
}

export default LocationDisplay