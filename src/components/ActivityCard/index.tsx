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
  imageUrl: string,
  description?: string
  location?: string
  address?: string
}

function ActivityCard({ name, location, imageUrl, description, address }: Activity) {
  return (
    <ActivityCardWrapper>
      <ShadowEffectCard>
        <ContentWrapper>
          <ActivityImage backgoundUrl={imageUrl} />
          <ActivityInformation>
            <ActivityTitle lineLimit={1}>{name}</ActivityTitle>
            {description && <ActivityDescription lineLimit={6}>{description}</ActivityDescription>}
            <ActivityRow>
              {location && address && <LocationLink location={location} address={address} />}
              <DetailButton>活動詳情</DetailButton>
            </ActivityRow>
          </ActivityInformation>
        </ContentWrapper>
      </ShadowEffectCard>
    </ActivityCardWrapper>
  )
}

export default ActivityCard