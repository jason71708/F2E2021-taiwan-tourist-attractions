import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/reducers'
import { fetchActivitiesRequest } from '../../store/actions/activities'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import SectionTitle from '../SectionTitle'
import { PageWrapper, ContentWrapper } from './style'
import { Shapes } from '../../constants'
import SectionActivity from '../SectionActivity'
import SectionScenicSpot from '../SectionScenicSpot'

function ScenicSpotsPage() {
  const dispatch = useDispatch()
  const { pending, activities, error } = useSelector(
    (state: RootState) => state.activities
  )

  useEffect(() => {
    dispatch(fetchActivitiesRequest({}))
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
          {pending && <div>Loading...</div>}
          {error && <div>Sorry, something wrong.</div>}
          {!pending && !error && <SectionActivity activities={activities} />}
        </ContentWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門景點'} type={Shapes.Triangle} />
          <SectionScenicSpot />
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export default ScenicSpotsPage