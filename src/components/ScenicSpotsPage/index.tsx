import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/reducers'
import { fetchActivitiesRequest } from '../../store/actions/activities'
import { fetchScenicSpotsRequest } from '../../store/actions/scenicSpots'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import SectionTitle from '../SectionTitle'
import { PageWrapper, ContentWrapper } from './style'
import { Shapes, ScenicSpotPageSeachOptions, ScrollTargetNames, cityOptions } from '../../constants'
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
      payload.keywords = encodeURIComponent(keywords)
    }
    if (category === ScenicSpotPageSeachOptions.Activity) {
      dispatch(fetchActivitiesRequest(payload))
    } else if (category === ScenicSpotPageSeachOptions.ScenicSpot) {
      dispatch(fetchScenicSpotsRequest(payload))
    } else {
      dispatch(fetchActivitiesRequest(payload))
      dispatch(fetchScenicSpotsRequest(payload))
    }
  }, [category, city, dispatch, keywords])

  const generateTitle = (city: string | null, keywords: string, type: string) => {
    if (city || keywords) {
      const targetCity = cityOptions.find(option => option.value === city)
      return `${type}搜尋 ${targetCity?.label || ''} ${keywords}`
    } else {
      return `熱門${type}`
    }
  }

  return(
    <>
      <Banner searchType={SearchType.ScenicSpotPage}/>
      <PageWrapper>
        {!(category || city || keywords) && <ContentWrapper>
          <SectionTitle title={'熱門城市' } type={Shapes.Triangle} />
          <CityCarousel />
        </ContentWrapper>}
        <ScrollTarget name={ScrollTargetNames.AfterSearch}>
          {(category === ScenicSpotPageSeachOptions.Activity || !category) && <ContentWrapper>
            <SectionTitle title={generateTitle(city, keywords, '活動')} type={Shapes.Triangle} />
            {activitiesState.pending && <LoadingPlaceholder />}
            {activitiesState.error && <ProblemPlaceholder problem={Problems.Error} />}
            {!activitiesState.pending && !activitiesState.error && <SectionActivity countsPerpage={8} items={activitiesState.activities} />}
          </ContentWrapper>}
          {(category === ScenicSpotPageSeachOptions.ScenicSpot || !category) &&<ContentWrapper>
            <SectionTitle title={generateTitle(city, keywords, '景點')} type={Shapes.Triangle} />
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