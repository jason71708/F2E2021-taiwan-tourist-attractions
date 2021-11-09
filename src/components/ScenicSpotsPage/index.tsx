import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/reducers'
import { fetchActivitiesRequest } from '../../store/actions/activities'
import { fetchScenicSpotsRequest } from '../../store/actions/scenicSpots'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import SectionTitle from '../SectionTitle'
import { PageWrapper, ContentWrapper } from './style'
import { Shapes } from '../../constants'
import SectionActivity from '../SectionActivity'
import SectionScenicSpot from '../SectionScenicSpot'

function ScenicSpotsPage() {
  const dispatch = useDispatch()
  const activitiesState = useSelector(
    (state: RootState) => state.activities
  )
  const scenicSpotsState = useSelector(
    (state: RootState) => state.scenicSpots
  )

  useEffect(() => {
    dispatch(fetchActivitiesRequest())
    dispatch(fetchScenicSpotsRequest())
  }, [])

  return(
    <>
      <Banner />
      <PageWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門城市'} type={Shapes.Triangle} />
          <CityCarousel />
        </ContentWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門活動'} type={Shapes.Triangle} />
          {activitiesState.pending && <div>Loading...</div>}
          {activitiesState.error && <div>Sorry, something wrong.</div>}
          {!activitiesState.pending && !activitiesState.error && <SectionActivity activities={activitiesState.activities} />}
        </ContentWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門景點'} type={Shapes.Triangle} />
          {scenicSpotsState.pending && <div>Loading...</div>}
          {scenicSpotsState.error && <div>Sorry, something wrong.</div>}
          {!scenicSpotsState.pending && !scenicSpotsState.error && <SectionScenicSpot scenicSpots={scenicSpotsState.scenicSpots}/>}
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export default ScenicSpotsPage