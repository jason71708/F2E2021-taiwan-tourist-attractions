import React from 'react'
import ShadowEffectCard from '../ShadowEffectCard'
import LocationLink from '../LocationLink'
import {
  CardWrapper,
  ContentWrapper,
  CardImage,
  CardInformation,
  CardTitle,
  CardDescription
} from './style'

type DisplayInfo = {
  name: string
  imageUrl: string
  location?: string
  address?: string,
  description?: string
}

function Card({ name, location, imageUrl, address, description }: DisplayInfo) {
  return (
    <CardWrapper>
      <ShadowEffectCard>
        <ContentWrapper>
          <CardImage backgoundUrl={imageUrl} />
          <CardInformation>
            <CardTitle lineLimit={1}>{name}</CardTitle>
            { (location && address) ?
              <LocationLink location={location} address={address} /> :
              description ?
              <CardDescription lineLimit={3}>{description}</CardDescription> : ''
            }
          </CardInformation>
        </ContentWrapper>
      </ShadowEffectCard>
    </CardWrapper>
  )
}

export default Card