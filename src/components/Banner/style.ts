import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'
import { shawdowCss } from '../../styles/helper'

export const BannerWrapper = styled.section`
  width: 100%;
  height: 116px;
  background-color: #fff;
  position: relative;

  ${breakpoint('md')`
    height: 160px;
  `}
 
  ${breakpoint('lg')`
    height: 536px;
  `}
`

export const BannerImage = styled.img`
  padding: 24px;
  display: none;
  width: 100%;
  filter: grayscale(20%);

  ${breakpoint('lg')`
    display: inline-block
  `}
`

export const BannerTitle = styled.div`
  display: none;

  ${breakpoint('lg')`
    display: block
  `}
`

export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 16px;

  ${breakpoint('md')`
    width: 420px;
    padding: 0;
  `}

  ${breakpoint('lg')`
    width: 500px;
  `}
`

export const BannerDescription = styled.span`
  display: none;
  padding-left: 8px;
  color: ${props => props.theme.colors.dark};
  font-size: 14px;
  margin-bottom: 16px;

  ${breakpoint('lg')`
    display: inline-block
  `}
`

export const InputRow = styled.div`
  width: 100%;
  display: flex;
`

export const InputStyled = styled.input`
  flex: 1 1 auto;
  background-color: #fff;
  padding: 8px 24px;
  height: 40px;
  border-radius: 6px;
  margin-right: 8px;
  ${shawdowCss}

  &:focus-visible {
    outline: none;
  }

  ${breakpoint('lg')`
    box-shadow: none;
  `}
`

export const SearchButton = styled.button`
`