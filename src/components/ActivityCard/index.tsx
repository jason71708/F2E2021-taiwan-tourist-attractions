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
  name: string
  description?: string
  location?: string
  imageUrl: string
}

function ActivityCard({ name, location, imageUrl, description }: Activity) {
  return (
    <ActivityCardWrapper>
      <ShadowEffectCard>
        <ContentWrapper>
          <ActivityImage backgoundUrl={imageUrl} />
          <ActivityInformation>
            <ActivityTitle>{name}</ActivityTitle>
            {description && <ActivityDescription lineLimit={6}>{description}</ActivityDescription>}
            <ActivityRow>
              {location && <LocationLink locationName={location} detailLocation={location} />}
              <DetailButton>活動詳情</DetailButton>
            </ActivityRow>
          </ActivityInformation>
        </ContentWrapper>
      </ShadowEffectCard>
    </ActivityCardWrapper>
  )
}

export default ActivityCard