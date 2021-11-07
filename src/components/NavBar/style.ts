import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

interface LinkTextProps {
  readonly match?: boolean
}


export const NavWrapper = styled.nav`
  padding: 8px 30px;
  font-size: 14px;
  display: flex;

  ${breakpoint('md')`
    padding: 0;
  `}
`

export const LinkWrapper = styled.div`
  margin-left: 27px;
  display: flex;
  align-items: flex-end;
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
  color: ${props => props.color};
  padding-bottom: 4px;
  text-decoration: ${props => props.match ? 'underline' : 'none'};
`