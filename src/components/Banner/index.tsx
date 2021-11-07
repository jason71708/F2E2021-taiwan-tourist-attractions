import React from 'react'
import Card from '../Card'
import Select from 'react-select'
import { BannerWrapper, BannerTitle, BannerImage, BannerContent, BannerDescription, InputRow, InputStyled } from './style'
import 旅遊圖 from '../../assets/image/旅遊.png'
import { ReactComponent as TitleImage } from '../../assets/image/title.svg'
import { ReactComponent as SearchIcon } from '../../assets/image/search.svg'
import { ReactComponent as LocationIcon } from '../../assets/image/location.svg'
import theme from '../../styles/theme'

const options = [
  { value: null, label: '類別' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
  option: (provided: object, state: { isSelected: boolean }) => ({
    ...provided,
    background: state.isSelected ? theme.colors.secondary : 'none',
  }),
  container: (provided: object) => ({
    ...provided,
    width: '40%',
    flex: '1 1 auto',
    marginRight: '8px'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}

function Banner() {
  return (
    <BannerWrapper>
      <Card>
        <BannerImage src={旅遊圖} />
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
            <Select isSearchable={false} styles={customStyles} options={options.slice(1)} defaultValue={options[0]}/>
            <Select isSearchable={false} styles={customStyles} options={options.slice(1)} defaultValue={options[0]}/>
            <LocationIcon />
          </InputRow>
        </BannerContent>
      </Card>
    </BannerWrapper>
  )
}

export default Banner