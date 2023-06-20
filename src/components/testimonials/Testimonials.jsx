import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/client1.jpg'
import AVT2 from '../../assets/client4.jpg'
import AVT3 from '../../assets/client2.jpg'
import AVT4 from '../../assets/client6.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    name: 'Tina Snow',
    reviw:'Overhaul and redesign for my clothing sales app making it simpler to use for my customers.'
  },
  {
    avatar: AVT2,
    name: 'John',
    reviw:'Overhaul and redesign for my clothing sales app making it simpler to use for my customers.'
  },
  {
    avatar: AVT3,
    name: 'Endy',
    reviw:'Overhaul and redesign for my clothing sales app making it simpler to use for my customers.'
  },
  {
    avatar: AVT4,
    name: 'Marco',
    reviw:'Overhaul and redesign for my clothing sales app making it simpler to use for my customers.'
  }
]

const Testimonials = () => {
  return (
    <section>
      <h5>Review from cliebts</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}>
        {
          data.map(({avatar,reviw,name },index) => {
            return (
              <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="" />
            
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {reviw}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials