import React, { useState } from 'react'
import ShadowEffectCard from '../ShadowEffectCard'
import CustomSelect from '../CustomSelect'
import {
  BannerWrapper,
  BannerTitle,
  BannerImage,
  BannerContent,
  BannerDescription,
  InputRow,
  InputStyled,
  SearchButton
} from './style'
// import 景點圖 from '../../assets/images/景點.png'
import 旅遊圖 from '../../assets/images/旅遊.png'
import 住宿圖 from '../../assets/images/住宿.png'
import Icons from '../Icons'
import {
  scenicSpotPageSeachOptions,
  accommodationPageSeachOptions,
  cityOptions
} from '../../constants'
import { Paths } from '../../constants'
import { useLocation, Location } from 'react-router-dom'
import { ScenicSpotPageSeachOptions, AccommodationPageSeachOptions, CityOptions, QueryOption } from '../../constants'
import useNavigateParams from '../../hooks/useNavigateParams'
import { scroller } from 'react-scroll'

const currentPathImage = (location: Location) => {
  switch (location.pathname) {
    case Paths.ScenicSpots:
      return 旅遊圖
    case Paths.Accommodations:
      return 住宿圖
    default:
      return undefined
  }
}

function Banner() {
  const navigateParams = useNavigateParams()
  const location = useLocation()
  const image = currentPathImage(location)
  const [keywords, setKeywords] = useState<string>('')
  const [category, setCategory] = useState<string | null>('')
  const [city, setCity] = useState<string | null>('')

  const submitSearch = () => {
    const searchParams  = new URLSearchParams()
    if (keywords.trim()) searchParams.set('keywords', keywords.trim())
    if (category) searchParams.set('category', category)
    if (city) searchParams.set('city', city)
    navigateParams(location.pathname, searchParams.toString())
    scroller.scrollTo('scrollTarget', {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -20
    })
  }

  return (
    <BannerWrapper>
      <ShadowEffectCard>
        <BannerImage src={image} />
        <BannerContent>
          <BannerTitle>
            <Icons.Title />
          </BannerTitle>
          <BannerDescription>台北、台中、台南、屏東、宜蘭……遊遍台灣</BannerDescription>
          <InputRow>
            {location.pathname === Paths.ScenicSpots ? (
              <CustomSelect
                key="ScenicSpot"
                isSearchable={false}
                options={scenicSpotPageSeachOptions}
                defaultValue={scenicSpotPageSeachOptions[0]}
                onChange={(option: QueryOption<ScenicSpotPageSeachOptions> | null) => {
                  setCategory(option ? option.value : option)
                }}
              />
            ) : (
              <CustomSelect
                key="Accommodation"
                isSearchable={false}
                options={accommodationPageSeachOptions}
                defaultValue={accommodationPageSeachOptions[0]}
                onChange={(option: QueryOption<AccommodationPageSeachOptions> | null) => {
                  setCategory(option ? option.value : option)
                }}
              />
            )}
            <CustomSelect
              isSearchable={false}
              options={cityOptions}
              defaultValue={cityOptions[0]}
              onChange={(option: QueryOption<CityOptions> | null) => {
                setCity(option ? option.value : option)
              }}
            />
            <Icons.Location />
          </InputRow>
          <InputRow>
            <InputStyled
              type="text"
              placeholder="搜尋關鍵字"
              value={keywords}
              onChange={e => setKeywords(e.target.value)}
              onKeyUp={e => {
                if (e.key === 'Enter') {
                  submitSearch()
                }
              }}
            />
            <SearchButton onClick={submitSearch}>
              <Icons.Search />
            </SearchButton>
          </InputRow>
        </BannerContent>
      </ShadowEffectCard>
    </BannerWrapper>
  )
}

export default Banner