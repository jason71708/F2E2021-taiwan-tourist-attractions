import React from 'react'
import ShadowEffectCard from '../ShadowEffectCard'
import {
  ActivityCardWrapper,
  ContentWrapper,
  ActivityImage,
  ActivityInformation,
  ActivityTitle,
  ActivityLocation,
  MapIconWrapper
} from './style'
import { ReactComponent as MapIcon } from '../../assets/image/map.svg'

type Activity = {
  title: string
  location: string
  imageUrl: string
}

function ActivityCard({ title, location, imageUrl }: Activity) {
  return (
    <ActivityCardWrapper>
      <ShadowEffectCard>
        <ContentWrapper>
          <ActivityImage backgoundUrl={imageUrl} />
          <ActivityInformation>
            <ActivityTitle>{title}</ActivityTitle>
            <ActivityLocation>
              <MapIconWrapper>
                <MapIcon />
              </MapIconWrapper>
              {location}
            </ActivityLocation>
          </ActivityInformation>
        </ContentWrapper>
      </ShadowEffectCard>
    </ActivityCardWrapper>
  )
}

export default ActivityCard