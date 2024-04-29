import '../App.css'
import React, { useState, useEffect } from 'react'
import sunshine_1 from '../assets/sunshine_1.jpg'
import corner_1 from '../assets/corner_1.jpg'
import bistrot_1 from '../assets/bistrot_1.jpg'
// import lemonMask from '../assets/Asset 9@4x.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faClockRotateLeft, faCommentDots, faUserGroup } from '@fortawesome/free-solid-svg-icons'

function Reservations () {
  const imagePerLocation = {
    sunshine: sunshine_1,
    corner: corner_1,
    bistrot: bistrot_1
  }

  const [reservationList, setReservationList] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem('reservationData')
    console.log('storedData', JSON.parse(JSON.stringify(storedData)))
    if (storedData) {
      setReservationList(JSON.parse(storedData))
    }
  }, [])

  const removeFormData = (idToRemove) => {
    // Retrieve the list of formData objects from localStorage
    const existingData = localStorage.getItem('reservationData')
    console.log('existingData', JSON.parse(JSON.stringify(existingData)))
    let existingList = existingData ? JSON.parse(existingData) : []

    // Remove the object with the specified id
    existingList = existingList.filter((item) => item.id !== idToRemove)

    // Store the updated list back into localStorage
    localStorage.setItem('reservationData', JSON.stringify(existingList))
    setReservationList(existingList)
  }

  return (
    <div className='reservation-page'>
      <h2>Reservations</h2>
      <h4>Here's a list of all your bookings:</h4>
      <ul className='reservation-table'>
        {reservationList.map((reservation) => (
          <li key={reservation.id} className='reservation-row'>
            <div className='reservation-card'>

              <img src={imagePerLocation[reservation.restaurant.value]} alt="restaurant" className='res-thumbnail' />

              <div className='res-card-content'>
                <h4 className='res-card-header'>{reservation.restaurant.label}</h4>

                <div className='res-card-dates'>

                  <div className='res-card-col'>
                    <FontAwesomeIcon className='clock-icon res-icon' icon={faCalendarAlt} size="1x" />
                    <p>{reservation.date}</p>
                  </div>

                  <div className='res-card-col res-card-hour'>
                    <FontAwesomeIcon className='clock-icon res-icon' icon={faClockRotateLeft} size="1x" />
                    <p>{reservation.timeslot}</p>
                  </div>

                </div>

                <div className='res-card-guests'>
                  <FontAwesomeIcon className='clock-icon res-icon' icon={faUserGroup} size="1x" />
                  <p>{reservation.guests} guest(s)</p>
                </div>

                <div className='res-card-notes'>
                  <FontAwesomeIcon className='clock-icon res-icon' icon={faCommentDots} size="1x" />
                  <input
                    className='res-card-notes-input'
                    value={reservation.notes}
                    disabled
                  />
                </div>

              </div>

              <div className='cancel-res' onClick={() => removeFormData(reservation.id)}>Cancel Reservation</div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Reservations;