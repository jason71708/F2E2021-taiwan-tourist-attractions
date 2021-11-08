import React from 'react'
import ShawdowEffectCard from '../ShawdowEffectCard'
import {
  ActivityCardWrapper,
  ContentWrapper,
  ActivityImage,
  ActivityInformation,
  ActivityTitle,
  ActivityRow,
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
      <ShawdowEffectCard>
        <ContentWrapper>
          <ActivityImage backgoundUrl={imageUrl} />
          <ActivityInformation>
            <ActivityTitle>{title}</ActivityTitle>
            <ActivityRow>
              <ActivityLocation>
                <MapIconWrapper>
                  <MapIcon />
                </MapIconWrapper>
                {location}
              </ActivityLocation>
            </ActivityRow>
          </ActivityInformation>
        </ContentWrapper>
      </ShawdowEffectCard>
    </ActivityCardWrapper>
  )
}

export default ActivityCard