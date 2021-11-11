import React from 'react'
import Card from '../Card'
import { SectionScenicSpotWrapper } from './style'
import { ScenicSpotTourismInfo } from '../../models/ScenicSpot'
import { HotelTourismInfo } from '../../models/Hotel'
import { RestaurantTourismInfo } from '../../models/Restaurant'
import ProblemPlaceholder, { Problems } from '../ProblemPlaceholder'

function SectionScenicSpot({ items }: { items: ScenicSpotTourismInfo[] | HotelTourismInfo[] | RestaurantTourismInfo[] }) {
  return (
    <SectionScenicSpotWrapper>
      {items.map(item => (
        <Card
          key={item.ID}
          name={item.Name}
          location={item.City}
          imageUrl={item.Picture.PictureUrl1}
          address={item.Address}
          description={item.Description || item.DescriptionDetail}
        />
      ))}
      {items.length === 0 && <ProblemPlaceholder problem={Problems.NoResult}/>}
    </SectionScenicSpotWrapper>
  )
}

export default SectionScenicSpot