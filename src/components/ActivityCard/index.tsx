import React from 'react'
import ShadowEffectCard from '../ShadowEffectCard'
import {
  ActivityCardWrapper,
  ContentWrapper,
  ActivityImage,
  ActivityInformation,
  ActivityTitle,
  ActivityDescription,
  ActivityRow,
  ActivityLocation,
  MapIconWrapper,
  DetailButton
} from './style'
import { ReactComponent as MapIcon } from '../../assets/image/map.svg'

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
            <ActivityDescription line={6}>{description}</ActivityDescription>
            <ActivityRow>
              <ActivityLocation>
                <MapIconWrapper>
                  <MapIcon />
                </MapIconWrapper>
                {location}
              </ActivityLocation>
              <DetailButton>活動詳情</DetailButton>
            </ActivityRow>
          </ActivityInformation>
        </ContentWrapper>
      </ShadowEffectCard>
    </ActivityCardWrapper>
  )
}

export default ActivityCard