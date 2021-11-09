import React from 'react'
import ShadowEffectCard from '../ShadowEffectCard'
import LocationLink from '../LocationLink'
import {
  ActivityCardWrapper,
  ContentWrapper,
  ActivityImage,
  ActivityInformation,
  ActivityTitle,
  ActivityDescription,
  ActivityRow,
  DetailButton
} from './style'

type Activity = {
  title: string
  description: string
  location: string
  imageUrl: string
}

function ActivityCard({ title, location, imageUrl, description }: Activity) {
  return (
    <ActivityCardWrapper>
      <ShadowEffectCard>
        <ContentWrapper>
          <ActivityImage backgoundUrl={imageUrl} />
          <ActivityInformation>
            <ActivityTitle>{title}</ActivityTitle>
            <ActivityDescription lineLimit={6}>{description}</ActivityDescription>
            <ActivityRow>
              <LocationLink locationName={location} detailLocation={location} />
              <DetailButton>活動詳情</DetailButton>
            </ActivityRow>
          </ActivityInformation>
        </ContentWrapper>
      </ShadowEffectCard>
    </ActivityCardWrapper>
  )
}

export default ActivityCard