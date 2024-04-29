import '../App.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import starIcon from '../assets/star_32.png'

function renderStars(starCount) {
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(<img src={starIcon} alt="Star" className='star' />)
  }
  return stars
}

function TestimonialsSection () {
  const testimonials = [
    {
      name: 'Olly Larsmith',
      username: 'ollyth96',
      review: 'I\'ve been a regular for over 2 years and I can say for sure that Little Lemon never misses! Everything is always super fresh and delicious.',
      stars: 5,
      getImageSrc: () => require('../assets/olly.jpg')
    },
    {
      name: 'Davide Giovannini',
      username: 'davide_giovi5',
      review: 'My grandma says this place is the only one capable of making a lemon cake better than hers, and I couldn\'t agree more! (Sorry grandma, love you!)',
      stars: 5,
      getImageSrc: () => require('../assets/davide.jpg')
    },
    {
      name: 'Adrienn Rumanu',
      username: 'adriannu',
      review: 'Their dishes are the only ones capable of reminding me of childhood flavour I had long forgotten!',
      stars: 4,
      getImageSrc: () => require('../assets/adrienna.jpg')
    },
    {
      name: 'Rio Kuncoro',
      username: 'rio_in_siesta',
      review: 'I come here every Sunday, always trying something new and exciting. I\'ve never been disappointer so far! 10/10',
      stars: 5,
      getImageSrc: () => require('../assets/rio_kuncoro.jpg')
    },
    {
      name: 'Chloe Kala',
      username: 'its_chloek',
      review: 'Definitely an experience everything should go through at least once a month. Totally worth it!',
      stars: 5,
      getImageSrc: () => require('../assets/chloe_kala.jpg')
    }
  ]

  return (
    <div className='testimonials-container'>

      <h2 className='testimonials-title'>What our customers say!</h2>

      <Swiper
        className='testimonials-swiper'
        spaceBetween={25} // Space between slides
        slidesPerView={4} // Number of slides per view
        breakpoints={{
          // When window width is >= 640px
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.username}>
            <div className='review-card' key={testimonial.username}>
              <div className='stars-row'>{renderStars(testimonial.stars)}</div>
              <div className='person-row'>
                <img src={testimonial.getImageSrc()} alt="Avatar" className='avatar' />
                <div className='person-info'>
                  <p className='full-name'>{testimonial.name}</p>
                  <p className='username'>@{testimonial.username}</p>
                </div>
              </div>
              <div className='review'>" {testimonial.review} "</div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )

}

export default TestimonialsSection;