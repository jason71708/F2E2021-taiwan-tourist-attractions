import React from 'react'
import CityCarousel from '../CityCarousel'
import Banner from '../Banner'
import SectionTitle from '../SectionTitle'
import { PageWrapper, ContentWrapper } from './style'
import { Shapes } from '../../constants'
import SectionActivity from '../SectionActivity'

function ScenicSpotsPage() {
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
          <SectionActivity />
        </ContentWrapper>
        <ContentWrapper>
          <SectionTitle title={'熱門景點'} type={Shapes.Triangle} />
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export default ScenicSpotsPage