import React from 'react'
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
// import 景點圖 from '../../assets/image/景點.png'
import 旅遊圖 from '../../assets/image/旅遊.png'
import 住宿圖 from '../../assets/image/住宿.png'
import Icons from '../Icons'
import {
  ScenicSpotPageSeachOptions,
  AccommodationPageSeachOptions,
  cityOptions
} from '../../constants'
import { Paths } from '../../constants'
import { useLocation, Location } from 'react-router-dom'

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
  const location = useLocation()
  const image = currentPathImage(location)

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
                options={ScenicSpotPageSeachOptions.slice(1)}
                defaultValue={ScenicSpotPageSeachOptions[0]}
              />
            ) : (
              <CustomSelect
                key="Accommodation"
                isSearchable={false}
                options={AccommodationPageSeachOptions.slice(1)}
                defaultValue={AccommodationPageSeachOptions[0]}
              />
            )}
            <CustomSelect isSearchable={false} options={cityOptions.slice(1)} defaultValue={cityOptions[0]}/>
            <Icons.Location />
          </InputRow>
          <InputRow>
            <InputStyled type="text" placeholder="搜尋關鍵字" />
            <SearchButton>
              <Icons.Search />
            </SearchButton>
          </InputRow>
        </BannerContent>
      </ShadowEffectCard>
    </BannerWrapper>
  )
}

export default Banner