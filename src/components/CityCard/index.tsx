import React from 'react'
import {
  CityCardGroupWrapper,
  CityCardWrapper,
  SingleContent,
  DoubleContent,
  CityImage,
  CityImageMask,
  CityContent,
  CityIconWrapper,
  CityTitle 
} from './style'
import { ReactComponent as MapIcon } from '../../assets/image/map.svg'

export type City = {
  name: string
  url: string
}

export const CityCard = ({ citys }: { citys: City[] }) => {
  const isDouble = citys.length > 1
  const content = citys.map(city => {
    return isDouble ? (<DoubleContent key={city.name}>
      <CityImage backgroundUrl={city.url}>
        <CityImageMask>
          <CityContent>
            <CityIconWrapper>
              <MapIcon />
            </CityIconWrapper>
            <CityTitle>{city.name}</CityTitle>
          </CityContent>
        </CityImageMask>
      </CityImage>
    </DoubleContent>) :
    (<SingleContent key={city.name}>
      <CityImage backgroundUrl={city.url}>
        <CityImageMask>
          <CityContent>
            <CityIconWrapper>
              <MapIcon />
            </CityIconWrapper>
            <CityTitle>{city.name}</CityTitle>
          </CityContent>
        </CityImageMask>
      </CityImage>
    </SingleContent>)
  })

  return (
    <CityCardWrapper>
      {content}
    </CityCardWrapper>
  )
}

export const CityCardGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <CityCardGroupWrapper>
      {children}
    </CityCardGroupWrapper>
  )
}