import React from 'react'
import Card from '../Card'
import { SectionScenicSpotWrapper } from './style'
import { ScenicSpotTourismInfo } from '../../models/ScenicSpot'
import ProblemPlaceholder, { Problems } from '../ProblemPlaceholder'

function SectionScenicSpot({ scenicSpots }: { scenicSpots: ScenicSpotTourismInfo[] }) {
  return (
    <SectionScenicSpotWrapper>
      {scenicSpots.map(scenicSpot => (
        <Card
          key={scenicSpot.ID}
          name={scenicSpot.Name}
          location={scenicSpot.City}
          imageUrl={scenicSpot.Picture.PictureUrl1}
          address={scenicSpot.Address}
          description={scenicSpot.Description}
        />
      ))}
      {scenicSpots.length === 0 && <ProblemPlaceholder problem={Problems.NoResult}/>}
    </SectionScenicSpotWrapper>
  )
}

export default SectionScenicSpot