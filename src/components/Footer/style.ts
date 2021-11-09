import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 12px 20px;
  background-color: #fff;
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  color: ${props => props.theme.colors.gray};

  ${breakpoint('lg')`
    padding: 24px 0;
  `}
`

export const FooterLink = styled.a`
`