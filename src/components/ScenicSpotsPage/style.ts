import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const PageWrapper = styled.section`
  padding: 40px 0;

  ${breakpoint('md')`
    padding: 40px 0;
  `}
  ${breakpoint('lg')`
    padding: 85px 0;
  `}
`

export const ContentWrapper = styled.section`
  position: relative;
  padding: 0 30px;
  margin-bottom: 50px;

  ${breakpoint('md')`
    padding: 0 60px;
  `}
  ${breakpoint('lg')`
    padding: 0 110px;
  `}
`