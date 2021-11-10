import React from 'react'
import ActivityCard from '../ActivityCard'
import { SectionActivityWrapper } from './style'
import { ActivityTourismInfo } from '../../models/Activity'
import NoResultPlaceholder from '../NoResultPlaceholder'

function SectionActivity({ activities }: { activities: ActivityTourismInfo[] }) {
  return (
    <SectionActivityWrapper>
      {activities.map(activity => (
        <ActivityCard
          key={activity.ID}
          name={activity.Name}
          location={activity.Location}
          imageUrl={activity.Picture.PictureUrl1}
          description={activity.Description}
          address={activity.Address}
        />
      ))}
      {activities.length === 0 && <NoResultPlaceholder />}
    </SectionActivityWrapper>
  )
}

export default SectionActivity