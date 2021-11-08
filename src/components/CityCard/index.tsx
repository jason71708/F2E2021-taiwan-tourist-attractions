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

type City = {
  name: string
  url: string
}

export const CityCard = ({ citys }: { citys: [City, City] | City }) => {
  const content = Array.isArray(citys) ? citys.map(city => (
    <>
      <DoubleContent key={city.name}>
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
      </DoubleContent>
    </>
  )) : (
    <SingleContent>
      <CityImage backgroundUrl={citys.url}>
        <CityImageMask>
          <CityContent>
            <CityIconWrapper>
              <MapIcon />
            </CityIconWrapper>
            <CityTitle>{citys.name}</CityTitle>
          </CityContent>
        </CityImageMask>
      </CityImage>
    </SingleContent>
  )
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