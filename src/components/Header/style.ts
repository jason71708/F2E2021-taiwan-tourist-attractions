import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const HeaderWrapper = styled.section`
  background-color: #fff;
  width: 100%;
  padding: 16px;
  display: block;
  text-align: center;

  ${breakpoint('md')`
    height: 80px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `}
 
  ${breakpoint('lg')`
    height: 104px;
    padding: 12px 80px;
  `}
`

export const LogoStyled = styled.img`
  height: 52px;

  ${breakpoint('md')`
    height: 100%;
  `}
 
  ${breakpoint('lg')`
    padding-top: 12px;
  `}
`