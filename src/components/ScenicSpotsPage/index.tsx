import React from 'react'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import SectionTitle from '../SectionTitle'
import { PageWrapper, ContentWrapper } from './style'
import { Shapes } from '../../constants'

function ScenicSpotsPage() {
  return(
    <>
      <Banner />
      <PageWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門城市'} type={Shapes.Triangle} />
          <CityCarousel />
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export default ScenicSpotsPage