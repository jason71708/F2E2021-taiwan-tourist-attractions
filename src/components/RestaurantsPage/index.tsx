import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/reducers'
import { fetchHotelsRequest } from '../../store/actions/hotels'
import { fetchRestaurantsRequest } from '../../store/actions/restaurants'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import SectionTitle from '../SectionTitle'
import { PageWrapper, ContentWrapper } from './style'
import { Shapes } from '../../constants'
import SectionScenicSpot from '../SectionScenicSpot'
import LoadingPlaceholder from '../LoadingPlaceholder'

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
      <Banner />
      <PageWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門城市'} type={Shapes.Square} />
          <CityCarousel />
        </ContentWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門美食'} type={Shapes.Square} />
          {restaurantsState.pending && <LoadingPlaceholder />}
          {restaurantsState.error && <div>Sorry, something wrong.</div>}
          {!restaurantsState.pending && !restaurantsState.error && <SectionScenicSpot items={restaurantsState.restaurants}/>}
        </ContentWrapper>
        <ContentWrapper>
          <SectionTitle title={'推薦住宿'} type={Shapes.Square} />
          {hotelsState.pending && <LoadingPlaceholder />}
          {hotelsState.error && <div>Sorry, something wrong.</div>}
          {!hotelsState.pending && !hotelsState.error && <SectionScenicSpot items={hotelsState.hotels} />}
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export default RestaurantsPage