import React, { useRef, useState } from 'react'
import Swiper from 'swiper'
import useBreakpoint from '../../hooks/useBreakpoint'
import useCityGroups from './useCityGroups'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import { CityCardGroup, CityCard } from '../CityCard'
import { LeftButton, RightButton } from './style'
import { ReactComponent as RightIcon } from '../../assets/image/vector-right.svg'
import { ReactComponent as LeftIcon } from '../../assets/image/vector-left.svg'
import 'swiper/swiper.min.css'
import './overwrite.css'

function CityCarousel() {
  const isLgBp = useBreakpoint('lg')
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const swiperRef = useRef<Swiper | null>(null)
  const cityGroups = useCityGroups()

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
        {cityGroups.map((cityGroup, index) => (
          <SwiperSlide key={`cityGroup-${index}`}>
            <CityCardGroup>
              {cityGroup.map((city, index) => (
                <CityCard key={`cities-${index}`} citys={city} />
              ))}
            </CityCardGroup>
          </SwiperSlide>
        ))}
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