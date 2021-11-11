import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/reducers'
import { fetchActivitiesRequest } from '../../store/actions/activities'
import { fetchScenicSpotsRequest } from '../../store/actions/scenicSpots'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import SectionTitle from '../SectionTitle'
import { PageWrapper, ContentWrapper } from './style'
import { Shapes, generalCountPerPage, activityCountPerPage, ScenicSpotPageSeachOptions, ScrollTargetNames } from '../../constants'
import SectionActivity from '../SectionActivity'
import SectionCards from '../SectionCards'
import LoadingPlaceholder from '../LoadingPlaceholder'
import ProblemPlaceholder, { Problems } from '../ProblemPlaceholder'
import useSearchQueryString, { SearchType } from '../../hooks/useSearchQueryString'
import { TDXAPIParameters } from '../../api/types'
import { Element as ScrollTarget } from 'react-scroll'

function ScenicSpotsPage() {
  const dispatch = useDispatch()
  const { keywords, city, category } = useSearchQueryString(SearchType.ScenicSpotPage)
  const activitiesState = useSelector(
    (state: RootState) => state.activities
  )
  const scenicSpotsState = useSelector(
    (state: RootState) => state.scenicSpots
  )

  useEffect(() => {
    const payload: TDXAPIParameters = {}
    if (city) {
      payload.city = city
    }
    if (keywords) {
      payload.keywords = keywords
    }
    if (category === ScenicSpotPageSeachOptions.Activity) {
      dispatch(fetchActivitiesRequest({ ...payload, perpageCounts: activityCountPerPage }))
    } else if (category === ScenicSpotPageSeachOptions.ScenicSpot) {
      dispatch(fetchScenicSpotsRequest({ ...payload, perpageCounts: generalCountPerPage}))
    } else {
      dispatch(fetchActivitiesRequest({ ...payload, perpageCounts: 4}))
      dispatch(fetchScenicSpotsRequest({ ...payload, perpageCounts: generalCountPerPage}))
    }
  }, [category, city, dispatch, keywords])

  return(
    <>
      <Banner searchType={SearchType.ScenicSpotPage}/>
      <PageWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門城市'} type={Shapes.Triangle} />
          <CityCarousel />
        </ContentWrapper>
        <ScrollTarget name={ScrollTargetNames.AfterSearch}>
          {(category === ScenicSpotPageSeachOptions.Activity || !category) && <ContentWrapper>
            <SectionTitle title={'熱門活動'} type={Shapes.Triangle} />
            {activitiesState.pending && <LoadingPlaceholder />}
            {activitiesState.error && <ProblemPlaceholder problem={Problems.Error} />}
            {!activitiesState.pending && !activitiesState.error && <SectionActivity activities={activitiesState.activities} />}
          </ContentWrapper>}
          {(category === ScenicSpotPageSeachOptions.ScenicSpot || !category) &&<ContentWrapper>
            <SectionTitle title={'熱門景點'} type={Shapes.Triangle} />
            {scenicSpotsState.pending && <LoadingPlaceholder />}
            {scenicSpotsState.error && <ProblemPlaceholder problem={Problems.Error} />}
            {!scenicSpotsState.pending && !scenicSpotsState.error && <SectionCards items={scenicSpotsState.scenicSpots}/>}
          </ContentWrapper>}
        </ScrollTarget>
      </PageWrapper>
    </>
  )
}

export default ScenicSpotsPage