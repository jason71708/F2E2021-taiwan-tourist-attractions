import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/reducers'
import { fetchHotelsRequest } from '../../store/actions/hotels'
import { fetchRestaurantsRequest } from '../../store/actions/restaurants'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import SectionTitle from '../SectionTitle'
import { PageWrapper, ContentWrapper } from './style'
import { Shapes, AccommodationPageSeachOptions, ScrollTargetNames } from '../../constants'
import SectionCards from '../SectionCards'
import LoadingPlaceholder from '../LoadingPlaceholder'
import ProblemPlaceholder, { Problems } from '../ProblemPlaceholder'
import useSearchQueryString, { SearchType } from '../../hooks/useSearchQueryString'
import { TDXAPIParameters } from '../../api/types'
import { Element as ScrollTarget } from 'react-scroll'

function RestaurantsPage() {
  const dispatch = useDispatch()
  const { keywords, city, category } = useSearchQueryString(SearchType.AccommodationPage)
  const hotelsState = useSelector(
    (state: RootState) => state.hotels
  )
  const restaurantsState = useSelector(
    (state: RootState) => state.restaurants
  )

  useEffect(() => {
    const payload: TDXAPIParameters = {}
    if (city) {
      payload.city = city
    }
    if (keywords) {
      payload.keywords = encodeURIComponent(keywords)
    }
    if (category === AccommodationPageSeachOptions.Accommodation) {
      dispatch(fetchHotelsRequest(payload))
    } else if (category === AccommodationPageSeachOptions.Restaurant) {
      dispatch(fetchRestaurantsRequest(payload))
    } else {
      dispatch(fetchHotelsRequest({ ...payload, limit: 20 }))
      dispatch(fetchRestaurantsRequest({ ...payload, limit: 20 }))
    }
  }, [category, city, dispatch, keywords])

  return(
    <>
      <Banner searchType={SearchType.AccommodationPage}/>
      <PageWrapper>
        {!(category || city || keywords) && <ContentWrapper>
          <SectionTitle title={'熱門城市'} type={Shapes.Square} />
          <CityCarousel />
        </ContentWrapper>}
        <ScrollTarget name={ScrollTargetNames.AfterSearch}>
          {(category === AccommodationPageSeachOptions.Restaurant || !category) && <ContentWrapper>
            <SectionTitle title={'熱門美食'} type={Shapes.Square} />
            {restaurantsState.pending && <LoadingPlaceholder />}
            {restaurantsState.error && <ProblemPlaceholder problem={Problems.Error} />}
            {!restaurantsState.pending && !restaurantsState.error && <SectionCards items={restaurantsState.restaurants}/>}
          </ContentWrapper>}
          {(category === AccommodationPageSeachOptions.Accommodation || !category) && <ContentWrapper>
            <SectionTitle title={'推薦住宿'} type={Shapes.Square} />
            {hotelsState.pending && <LoadingPlaceholder />}
            {hotelsState.error && <ProblemPlaceholder problem={Problems.Error} />}
            {!hotelsState.pending && !hotelsState.error && <SectionCards items={hotelsState.hotels} />}
          </ContentWrapper>}
        </ScrollTarget>
      </PageWrapper>
    </>
  )
}

export default RestaurantsPage