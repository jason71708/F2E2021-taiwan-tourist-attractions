import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'
import { shawdowCss } from '../../styles/helper'

export const CityCardGroupWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const CityCardWrapper = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${breakpoint('md')`
    width: 25%;
    height: 260px;
  `}

  ${breakpoint('lg')`
    width: 20%;
    height: 260px;
  `}
`

export const SingleContent = styled.div`
  width: calc(100% - 5px);
  height: calc(100% - 10px);
  padding: 12px;
  background-color: #fff;
  ${shawdowCss}
`

export const DoubleContent = styled.div`
  width: calc(100% - 5px);
  height: calc(50% - 10px);
  padding: 8px;
  background-color: #fff;
  ${shawdowCss}
`

type CityImageProps = {
  readonly backgroundUrl: string
}

export const CityImage = styled.div<CityImageProps>`
  position: relative;
  background-image: url(${props => props.backgroundUrl});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`

export const CityImageMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.dark}33;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.colors.dark}80;
  }
`

export const CityContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CityIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const CityTitle = styled.h3`
  margin: 0;
  margin-top: 8px;
  font-size: 14px;
  color: #fff;

  ${breakpoint('lg')`
    font-size: 20px;
  `}
`