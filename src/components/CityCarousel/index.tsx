import React, { useRef, useState } from 'react'
import Swiper from 'swiper'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import './overwrite.css'
import { ReactComponent as LeftIcon } from '../../assets/image/vector-left.svg'
import { ReactComponent as RightIcon } from '../../assets/image/vector-right.svg'
import { LeftButton, RightButton } from './style'
import useBreakpoint from '../../hooks/useBreakpoint'
import { CityCardGroup, CityCard } from '../CityCard'

import 台北市圖 from '../../assets/image/台北市.png'
import 新北市圖 from '../../assets/image/新北市.png'

const one = {
  name: '台北市',
  url: 台北市圖
}

const two = {
  name: '新北市',
  url: 新北市圖
}

function CityCarousel() {
  const isLgBp = useBreakpoint('lg')
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const swiperRef = useRef<Swiper | null>(null)

  return (
    <>
      <SwiperComponent
        freeMode={!isLgBp}
        spaceBetween={4}
        slidesPerView={1}
        onSlideChange={swiper => {
          setActiveIndex(swiper.activeIndex)
        }}
        onSwiper={swiper => {
          swiperRef.current = swiper
        }}
      >
        <SwiperSlide>
          <CityCardGroup>
            <CityCard citys={one} />
            <CityCard citys={[one, two]} />
            <CityCard citys={one} />
            <CityCard citys={[one, two]} />
            {/* <CityCard citys={one} /> */}
          </CityCardGroup>
        </SwiperSlide>
        <SwiperSlide>
          <CityCardGroup>
            <CityCard citys={one} />
            <CityCard citys={[one, two]} />
            {/* <CityCard citys={one} />
            <CityCard citys={[one, two]} />
            <CityCard citys={one} /> */}
          </CityCardGroup>
        </SwiperSlide>
      </SwiperComponent>
      {activeIndex !== 0 && isLgBp && <LeftButton onClick={() => {
        swiperRef.current?.slidePrev()
      }}>
        <LeftIcon />
      </LeftButton>}
      {activeIndex !== 1 && isLgBp && <RightButton onClick={() => {
        swiperRef.current?.slideNext()
      }}>
        <RightIcon />
      </RightButton>}
    </>
  )
}

export default CityCarousel