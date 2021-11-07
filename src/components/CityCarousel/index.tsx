import React, { useRef } from 'react'
import Swiper from 'swiper'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import { ReactComponent as LeftIcon } from '../../assets/image/vector-left.svg'
import { ReactComponent as RightIcon } from '../../assets/image/vector-right.svg'

const style = {
  padding: '20px 100px'
}

function CityCarousel() {
  const swiperRef = useRef<Swiper | null>(null)

  return (
    <SwiperComponent
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => {
        swiperRef.current = swiper
      }}
    >
      <LeftIcon onClick={() => {
        swiperRef.current?.slidePrev()
      }}/>
      <RightIcon onClick={() => {
        swiperRef.current?.slideNext()
      }}/>
      <SwiperSlide>
        <div style={style}>
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <h1>hey</h1>
        <h1>hey</h1>
        <h1>hey</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1>yo</h1>
        <h1>yo</h1>
        <h1>yo</h1>
      </SwiperSlide>
    </SwiperComponent>
  )
}

export default CityCarousel