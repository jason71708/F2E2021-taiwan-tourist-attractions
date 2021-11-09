import React from 'react'
import ShadowEffectCard from '../ShadowEffectCard'
import LocationLink from '../LocationLink'
import {
  CardWrapper,
  ContentWrapper,
  CardImage,
  CardInformation,
  CardTitle
} from './style'

type DisplayInfo = {
  title: string
  location: string
  imageUrl: string
}

function Card({ title, location, imageUrl }: DisplayInfo) {
  return (
    <CardWrapper>
      <ShadowEffectCard>
        <ContentWrapper>
          <CardImage backgoundUrl={imageUrl} />
          <CardInformation>
            <CardTitle lineLimit={2}>{title}</CardTitle>
            <LocationLink locationName={location} detailLocation={location} />
          </CardInformation>
        </ContentWrapper>
      </ShadowEffectCard>
    </CardWrapper>
  )
}

export default Card