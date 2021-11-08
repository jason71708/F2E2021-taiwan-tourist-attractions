import React from 'react'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import { PageWrapper, ContentWrapper } from './style'

function ScenicSpotsPage() {
  return(
    <>
      <Banner />
      <PageWrapper>
        <ContentWrapper>
          <CityCarousel />
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export default ScenicSpotsPage