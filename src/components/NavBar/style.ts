import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'
import { shawdowCss } from '../../styles/helper'

interface LinkTextProps {
  readonly match?: boolean
}

export const NavWrapper = styled.nav`
  margin-top: 12px;
  padding: 8px 30px;
  font-size: 14px;
  display: flex;
  ${shawdowCss}
  justify-content: center;

  ${breakpoint('md')`
    margin-top: 0;
    margin-left: 0;
    padding: 0;
    box-shadow: none;
  `}
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  &:nth-child(n+2) {
    margin-left: 27px;
  }
`

export const LinkIcon = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
  display: none;

  ${breakpoint('md')`
    display: inline-block
  `}
`

export const LinkText = styled.span<LinkTextProps>`
  display: inline-block;
  color: ${props => props.match ? props.color : '#ACACAC'};
  padding-bottom: 0;
  text-decoration: none;

  ${props => breakpoint('md')`
    display: inline-block;
    color: ${props.color};
    padding-bottom: 4px;
    text-decoration: ${props.match ? 'underline' : 'none'};
  `}
`