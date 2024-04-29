import '../App.css'
import React, { useState, forwardRef, useRef, useEffect  } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function BookingForm(props) {
  const prevPropsRef = useRef()

  useEffect(() => {
    const prevProps = prevPropsRef.current;
    if (prevProps && prevProps.selectedLocation !== props.selectedLocation) {
      // Perform the actions needed on change
      setSelectedDate(new Date())
      setSelectedTimeSlot(null)
      setShowTimeslots(false)
      setGuestNumber(0)
      setShowGuestChoice(false)
    }
    prevPropsRef.current = props;
  }, [props.selectedLocation]);

  // Datepicker controls
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handleDateChange = (date) => {
    setSelectedDate(date)
    setSelectedTimeSlot(null)
    setGuestNumber(1)
    setShowGuestChoice(false)
    date != null ? setShowTimeslots(true) : setShowTimeslots(false)
  }

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-date-button" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  // Timeslots
  const [showTimeslots, setShowTimeslots] = useState(false)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
  const timeSlots = {
    lunch: ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30'],
    dinner: ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']
  }

  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot)
    console.log('selectedTimeSlot: ' + selectedTimeSlot)
    if (timeSlot != null && selectedDate != null) {
      setShowGuestChoice(true)
      console.log('showTimeslots: ' + showTimeslots)
    } else { setShowGuestChoice(false) }
  }

  // Guests
  const [guestNumber, setGuestNumber] = useState(1)
  const [showGuestChoice, setShowGuestChoice] = useState(false)

  const increment = () => setGuestNumber(guestNumber + 1)
  const decrement = () => {
      if (guestNumber > 1) {
          setGuestNumber(guestNumber - 1);
      }
  }

  // Notes
  const [notes, setNotes] = useState('')
  const handleNotesInput = (event) => {
    setNotes(event.target.value)
    console.log('notes: ' + notes)
  }


  // Form Data (form submission handling)
  const [formData, setFormData] = useState({
    id: '',
    restaurant: '',
    date: '',
    timeslot: '',
    guests: '',
    notes: ''
  })

  const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1 // Months are zero-based, so add 1
    const year = date.getFullYear()

    // Pad single-digit day and month with leading zero if necessary
    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `0${month}` : month

    // Return formatted date string in the desired format
    return `${formattedDay}/${formattedMonth}/${year}`
  }

  const handleConfirm = (event) => {
    const uniqueId = uuidv4()

    setFormData((prevFormData) => ({
      ...prevFormData,
      id: uniqueId,
      restaurant: props.selectedLocation,
      date: formatDate(selectedDate),
      timeslot: selectedTimeSlot,
      guests: guestNumber,
      notes: notes
    }))

    // Using the updated formData state inside the callback
    setFormData((formData) => {
      console.log('formData', formData)

      const existingData = localStorage.getItem('reservationData')
      const existingList = existingData ? JSON.parse(existingData) : []

      let dataAlreadyExists = false
      for (const data of existingList) {
        if (data.id === formData.id) {
          dataAlreadyExists = true
        }
      }

      if (dataAlreadyExists === false) {
        const updatedList = [...existingList, formData]
        console.log('updatedList', updatedList)

        localStorage.setItem('reservationData', JSON.stringify(updatedList))
        const storedData = localStorage.getItem('reservationData')
        console.log('storedData', JSON.parse(JSON.stringify(storedData)))

        // Display confirmation toast
        toast.success('The reservation was submitted successfully!')
      }

      return formData
    })

    // Reset all values
    setSelectedDate(new Date())
    setSelectedTimeSlot(null)
    setGuestNumber(1)
    setNotes('')
    setShowTimeslots(false)
    setShowGuestChoice(false)
  }


  return (
    <div className='choices-container'>

      <ToastContainer />

        {/* Date Picker */}
        <div className='date-picker-container'>
          <h4>Choose your date</h4>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            customInput={<CustomDateInput />}
          />
        </div>

        {/* Time Slot Picker */}
        {showTimeslots ? (
          <div className='time-slot-container'>
            <h4>These are the time slots available:</h4>
            <div className='time-slots'>
              {Object.keys(timeSlots).map((key) => (
                <div key={key}>
                  <p className='time-period' >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>

                  <ul className='time-slot-list'>
                    {timeSlots[key].map((time) => (
                      <li className={selectedTimeSlot === time ? 'time-slot-btn selected-time-slot' : 'time-slot-btn'}
                          key={time}
                          onClick={() => handleTimeSlotSelection(time)}>{time}</li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>
          ) : (<div></div>)}

        {/* Guest Number Choice */}
        {showGuestChoice ? (
          <div className='guest-container'>
            <h4>Number of guests</h4>
            <div className="guest-number-input">
                <button className='minus' onClick={decrement} disabled={guestNumber === 1}>-</button>
                <input type="guest-number" value={guestNumber} min="1" max="12" disabled onChange={e => setGuestNumber(Math.max(1, parseInt(e.target.value)))} />
                <button className='plus' onClick={increment} disabled={guestNumber === 12}>+</button>
            </div>
          </div>
          ) : (<div></div>)}

          {/* Additional Notes */}
          {showGuestChoice ? (
            <div className='notes-container'>
              <h4>Is there anything the restaurant should know in advance?</h4>
              <textarea
                className='notes-input'
                value={notes}
                onInput={handleNotesInput}
                maxLength={250}
                placeholder="Enter text..."
              />
              <span className="character-count">{250 - notes.length} characters remaining</span>
            </div>
            ) : (<div></div>)}

          {/* Submit Form */}
          {showGuestChoice ? (
            <div className='submit-form'>
              <button className='confirm-booking' onClick={handleConfirm}>Confirm Reservation</button>
            </div>
            ) : (<div></div>)}

      </div>
  )
}

export default BookingForm