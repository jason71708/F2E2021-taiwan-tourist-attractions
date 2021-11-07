import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const HeaderWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 60px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${breakpoint('md')`
    height: 80px;
    padding: 12px 16px;
  `}
 
  ${breakpoint('lg')`
    height: 104px;
    padding: 12px 80px;
  `}
`

export const LogoStyled = styled.img`
  height: 100%;
 
  ${breakpoint('lg')`
    padding-top: 12px
  `}
`