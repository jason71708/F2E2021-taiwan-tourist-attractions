import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const InfoSnippetWrapper = styled.span`
  display: flex;
  align-items: center;
`

export const InfoSnippeIconWrapper = styled.i`
  flex: 0 0 auto;
  margin-right: 8px;
  padding: 3px;
  width: 24px;
  height: 24px;

  & svg {
    width: 100%;
    height: 100%;
  }

  ${breakpoint('lg')`
    margin-right: 12px;
  `}
`

export const InfoSnippeText = styled.p`
  font-size: 14px;
  line-height: 21px;
`