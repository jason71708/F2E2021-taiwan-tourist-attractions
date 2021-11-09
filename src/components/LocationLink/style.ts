import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const LocationLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const MapIconWrapper = styled.span`
  margin-right: 8px;

  & path {
    fill: ${props => props.theme.colors.primary};
  }

  ${breakpoint('lg')`
    margin-right: 12px;
  `}
`