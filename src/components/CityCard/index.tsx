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
import Icons from '../Icons'

export type City = {
  name: string
  url: string
  value: string | null
}

export const CityCard = ({ citys, onClick }: { citys: City[], onClick: (value: string | null) => void }) => {
  const isDouble = citys.length > 1
  const content = citys.map(city => {
    return isDouble ? (<DoubleContent onClick={() => onClick(city.value)} key={city.name}>
      <CityImage backgroundUrl={city.url}>
        <CityImageMask>
          <CityContent>
            <CityIconWrapper>
              <Icons.Map/>
            </CityIconWrapper>
            <CityTitle>{city.name}</CityTitle>
          </CityContent>
        </CityImageMask>
      </CityImage>
    </DoubleContent>) :
    (<SingleContent onClick={() => onClick(city.value)} key={city.name}>
      <CityImage backgroundUrl={city.url}>
        <CityImageMask>
          <CityContent>
            <CityIconWrapper>
              <Icons.Map />
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