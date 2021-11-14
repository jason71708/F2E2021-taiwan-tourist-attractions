import React from 'react'
import ShadowEffectCard from '../ShadowEffectCard'
import LocationLink from '../LocationLink'
import {
  ActivityCardWrapper,
  ContentWrapper,
  ActivityImage,
  ActivityInformation,
  ActivityLinkTitle,
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
  websiteUrl?: string
  onClick?: () => void
}

function ActivityCard({ name, location, imageUrl, description, address, websiteUrl, onClick }: Activity) {
  return (
    <ActivityCardWrapper>
      <ShadowEffectCard>
        <ContentWrapper>
          <ActivityImage backgoundUrl={imageUrl} onClick={() => {
            if (onClick) {
              onClick()
            }
          }}/>
          <ActivityInformation>
            {websiteUrl ? (
              <ActivityLinkTitle href={websiteUrl} lineLimit={1} target="_blank">{name}</ActivityLinkTitle>
            ): (
              <ActivityTitle lineLimit={1}>{name}</ActivityTitle>
            )}
            {description && <ActivityDescription lineLimit={6}>{description}</ActivityDescription>}
            <ActivityRow>
              {location && address && <LocationLink location={location} address={address} />}
              <DetailButton onClick={e => {
                if (onClick) {
                  onClick()
                }
              }}>活動詳情</DetailButton>
            </ActivityRow>
          </ActivityInformation>
        </ContentWrapper>
      </ShadowEffectCard>
    </ActivityCardWrapper>
  )
}

export default ActivityCard