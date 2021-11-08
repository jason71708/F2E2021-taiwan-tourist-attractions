import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const Title = styled.title`
  font-size: 14px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;

  ${breakpoint('lg')`
    font-size: 20px;
  `}
`

export const TitleIconWrapper = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
`