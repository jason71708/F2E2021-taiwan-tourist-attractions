import React from 'react'
import Card from '../Card'
import CustomSelect from '../CustomSelect'
import {
  BannerWrapper,
  BannerTitle,
  BannerImage,
  BannerContent,
  BannerDescription,
  InputRow,
  InputStyled
} from './style'
// import 景點圖 from '../../assets/image/景點.png'
import 旅遊圖 from '../../assets/image/旅遊.png'
import 住宿圖 from '../../assets/image/住宿.png'
import { ReactComponent as TitleImage } from '../../assets/image/title.svg'
import { ReactComponent as SearchIcon } from '../../assets/image/search.svg'
import { ReactComponent as LocationIcon } from '../../assets/image/location.svg'
import {
  ScenicSpotPageSeachOptions,
  AccommodationPageSeachOptions,
  CityOptions
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
      <Card>
        <BannerImage src={image} />
        <BannerContent>
          <BannerTitle>
            <TitleImage />
          </BannerTitle>
          <BannerDescription>台北、台中、台南、屏東、宜蘭……遊遍台灣</BannerDescription>
          <InputRow>
            <InputStyled type="text" placeholder="搜尋關鍵字" />
            <SearchIcon />
          </InputRow>
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
            <CustomSelect isSearchable={false} options={CityOptions.slice(1)} defaultValue={CityOptions[0]}/>
            <LocationIcon />
          </InputRow>
        </BannerContent>
      </Card>
    </BannerWrapper>
  )
}

export default Banner