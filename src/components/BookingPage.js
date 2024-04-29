import '../App.css'
import React, { useState } from 'react'
import Select from 'react-select'
import LocationDisplay from './LocationDisplay'
import BookingForm from './BookingForm'

const BookingPage = () => {

  // Locations controls
  const locations = [
    { label: 'Little Lemon Sunshine', value: 'sunshine' },
    { label: 'Lemon Special Corner', value: 'corner' },
    { label: 'Little Lemon Bistrot', value: 'bistrot' }
  ]

  const [selectedLocation, setSelectedLocation] = useState(null)
  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(null);
    setSelectedLocation(selectedOption);
  }

  return (
    <div className='booking-container'>

      <h1>Let's book a table!</h1>

      {/* Choose a location */}
      <div className='selector-container'>
        <Select
          value={selectedLocation}
          onChange={handleLocationChange}
          options={locations}
          placeholder="Search for a location..."
          isClearable
          isSearchable
          className='location-selector'
        />
      </div>

      <div className='booking-columns'>
        {/* Location Display */}
        {selectedLocation != null ? (<LocationDisplay selectedLocation={selectedLocation}/>) : (<div></div>)}

        {/* Booking Form */}
        {selectedLocation != null ? (<BookingForm selectedLocation={selectedLocation}/>) : (<div></div>)}
      </div>

    </div>
  )
}

export default BookingPage
