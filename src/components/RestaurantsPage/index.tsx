import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/reducers'
import { fetchHotelsRequest } from '../../store/actions/hotels'
import { fetchRestaurantsRequest } from '../../store/actions/restaurants'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import SectionTitle from '../SectionTitle'
import { PageWrapper, ContentWrapper } from './style'
import { Shapes, generalCountPerPage, activityCountPerPage, ScenicSpotPageSeachOptions, ScrollTargetNames } from '../../constants'
import SectionCards from '../SectionCards'
import LoadingPlaceholder from '../LoadingPlaceholder'
import ProblemPlaceholder, { Problems } from '../ProblemPlaceholder'
import useSearchQueryString, { SearchType } from '../../hooks/useSearchQueryString'
import { Element as ScrollTarget } from 'react-scroll'

function RestaurantsPage() {
  const dispatch = useDispatch()
  const hotelsState = useSelector(
    (state: RootState) => state.hotels
  )
  const restaurantsState = useSelector(
    (state: RootState) => state.restaurants
  )

  useEffect(() => {
    dispatch(fetchHotelsRequest({ perpageCounts: 20 }))
    dispatch(fetchRestaurantsRequest({ perpageCounts: 20 }))
  }, [])

  return(
    <>
      <Banner searchType={SearchType.AccommodationPage}/>
      <PageWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門城市'} type={Shapes.Square} />
          <CityCarousel />
        </ContentWrapper>
        <ScrollTarget name={ScrollTargetNames.AfterSearch}>
          <ContentWrapper>
            <SectionTitle title={'熱門美食'} type={Shapes.Square} />
            {restaurantsState.pending && <LoadingPlaceholder />}
            {restaurantsState.error && <ProblemPlaceholder problem={Problems.Error} />}
            {!restaurantsState.pending && !restaurantsState.error && <SectionCards items={restaurantsState.restaurants}/>}
          </ContentWrapper>
          <ContentWrapper>
            <SectionTitle title={'推薦住宿'} type={Shapes.Square} />
            {hotelsState.pending && <LoadingPlaceholder />}
            {hotelsState.error && <ProblemPlaceholder problem={Problems.Error} />}
            {!hotelsState.pending && !hotelsState.error && <SectionCards items={hotelsState.hotels} />}
          </ContentWrapper>
        </ScrollTarget>
      </PageWrapper>
    </>
  )
}

export default RestaurantsPage