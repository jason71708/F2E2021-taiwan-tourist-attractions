import { useRef, useState, useCallback } from 'react'
import Swiper from 'swiper'
import useBreakpoint from '../../hooks/useBreakpoint'
import useCityGroups from './useCityGroups'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import { CityCardGroup, CityCard } from '../CityCard'
import { LeftButton, RightButton } from './style'
import Icons from '../Icons'
import 'swiper/swiper.min.css'
import './overwrite.css'
import useNavigateParams from '../../hooks/useNavigateParams'
import { useLocation } from 'react-router-dom'

function CityCarousel() {
  const navigateParams = useNavigateParams()
  const location = useLocation()
  
  const isLgBp = useBreakpoint('lg')
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const swiperRef = useRef<Swiper | null>(null)
  const cityGroups = useCityGroups()

  const getSearchParmsString = useCallback((city: string) => {
    const searchParams  = new URLSearchParams()
    if (city) searchParams.set('city', city)
    return searchParams.toString()
  }, [])

  const searchCity = (value: string | null) => {
    if (value) {
      navigateParams(location.pathname, getSearchParmsString(value))
    }
  }

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
                <CityCard key={`cities-${index}`} citys={city} onClick={searchCity}/>
              ))}
            </CityCardGroup>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      {activeIndex !== 0 && isLgBp && <LeftButton onClick={() => {
        swiperRef.current?.slidePrev()
      }}>
        <Icons.VectorLeft />
      </LeftButton>}
      {activeIndex !== 1 && isLgBp && <RightButton onClick={() => {
        swiperRef.current?.slideNext()
      }}>
        <Icons.VectorRight />
      </RightButton>}
    </>
  )
}

export default CityCarousel