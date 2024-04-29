import '../App.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function HighlightsSection () {
  const specialDishes = [
    {
      name: 'Happy Rice',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: 11.99,
      getImageSrc: () => require('../assets/rice.jpg')
    },
    {
      name: 'Mini Cheesecake',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: 4.59,
      getImageSrc: () => require('../assets/cheesecake.jpg')
    },
    {
      name: 'Bruschetta',
      description: 'Our burschetta is made from garlic bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: 5.99,
      getImageSrc: () => require('../assets/bruschetta.jpg')
    },
    {
      name: 'Lemon Dessert',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: 6.99,
      getImageSrc: () => require('../assets/lemon dessert.jpg')
    },
    {
      name: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: 12.99,
      getImageSrc: () => require('../assets/greek salad.jpg')
    }
  ]

  return (
    <div className='swiper-container'>

      <div className='highlights-header'>
        <h2 className='highlights-title'>This Week's Specials</h2>
        <a className='menu-btn' href="/menu" role="button">Menu</a>
      </div>

      <Swiper
        spaceBetween={30} // Space between slides
        slidesPerView={3} // Number of slides per view
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // When window width is >= 640px
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {specialDishes.map((dish) => (
          <SwiperSlide key={dish.name}>
            <div className='dish-card'>
              <img src={dish.getImageSrc()} alt="Dish" className='dish-img' />
              <div className='card-header'>
                <h3>{dish.name}</h3>
                <p className='price'>$ {dish.price}</p>
              </div>
              <div className='card-content'>
                <p>{dish.description}</p>
                <button className='order-delivery-btn'>Order a delivery</button>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )

}

export default HighlightsSection;