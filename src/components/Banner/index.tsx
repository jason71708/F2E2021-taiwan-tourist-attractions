import React, { useEffect, useState } from 'react'
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
  cityOptions,
  ScenicSpotPageSeachOptions,
  AccommodationPageSeachOptions,
  CityOptions,
  QueryOption,
  ScrollTargetNames
} from '../../constants'
import { Paths } from '../../constants'
import { useLocation, Location } from 'react-router-dom'
import useNavigateParams from '../../hooks/useNavigateParams'
import { scroller } from 'react-scroll'
import useSearchQueryString, { SearchType } from '../../hooks/useSearchQueryString'

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

function Banner({ searchType }: { searchType: SearchType }) {
  const navigateParams = useNavigateParams()
  const location = useLocation()
  const queryStrings = useSearchQueryString(SearchType[searchType])
  const image = currentPathImage(location)
  const [keywords, setKeywords] = useState<string>(queryStrings.keywords || '')
  const [category, setCategory] = useState<string | null>(queryStrings.category)
  const [city, setCity] = useState<string | null>(queryStrings.city)

  const submitSearch = () => {
    const searchParams  = new URLSearchParams()
    if (keywords.trim()) searchParams.set('keywords', keywords.trim())
    if (category) searchParams.set('category', category)
    if (city) searchParams.set('city', city)
    navigateParams(location.pathname, searchParams.toString())
    scroller.scrollTo(ScrollTargetNames.AfterSearch, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -20
    })
  }
  
  useEffect(() => {
    if (location.search === '') {
      setKeywords('')
      setCategory(
        searchType === SearchType.ScenicSpotPage ? scenicSpotPageSeachOptions[0].value
        : searchType === SearchType.AccommodationPage ? accommodationPageSeachOptions[0].value
        : null
      )
      setCity(cityOptions[0].value)
      return
    }
    scroller.scrollTo(ScrollTargetNames.AfterSearch, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -20
    })
  }, [location, searchType])

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
            {searchType === SearchType.ScenicSpotPage && <CustomSelect
              key="ScenicSpot"
              isSearchable={false}
              options={scenicSpotPageSeachOptions}
              defaultValue={scenicSpotPageSeachOptions.find(option => option.value === category) || scenicSpotPageSeachOptions[0]}
              onChange={(option: QueryOption<ScenicSpotPageSeachOptions> | null) => {
                setCategory(option ? option.value : option)
              }}
            />
            }
            {searchType === SearchType.AccommodationPage && <CustomSelect
              key="Accommodation"
              isSearchable={false}
              options={accommodationPageSeachOptions}
              defaultValue={accommodationPageSeachOptions.find(option => option.value === category) || accommodationPageSeachOptions[0]}
              onChange={(option: QueryOption<AccommodationPageSeachOptions> | null) => {
                setCategory(option ? option.value : option)
              }}
            />}
            <CustomSelect
              isSearchable={false}
              options={cityOptions}
              defaultValue={cityOptions.find(option => option.value === city) || cityOptions[0]}
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
              onKeyPress={e => {
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