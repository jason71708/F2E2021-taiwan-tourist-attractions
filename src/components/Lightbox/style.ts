import styled from 'styled-components'
import breakpoint, { breakpoints } from '../../styles/breakpoint'

export const LightBoxWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.dark}50;
    backdrop-filter: blur(5px);
  }
`

export const LightBoxContentWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const LightBoxContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 680px;
  width: calc(100% - 72px);
  max-height: calc(100vh - 48px);
  overflow: auto;
  background-color: #fff;
  padding: 16px;

  ${breakpoint('md')`
    padding: 32px;
  `}
`

export const LightBoxImageWrapper = styled.div`
  width: 100%;
  padding-top: 56%; // 16:9
  position: relative;
`

export const LightBoxImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`

export const ImageController = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: end;
  align-items: center;
`

export const ImageControlButton = styled.span`
  width: 40px;
  height: 40px;
  user-select: none;
  
  &:nth-child(1) {
    margin-right: 24px;
  }

  & svg {
    cursor: pointer;
  }
`

export const LighboxTitle = styled.h1`
  font-size: 18px;
  margin-top: 12px;
  line-height: 26px;
`

export const LighboxDescription = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 20px;
`

export const LighboxDetailInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const LighboxDetailInfo = styled.div`
  margin-top: 16px;
  flex: 1 0 auto;
  width: 100%;
  justify-content: start;

  ${breakpoint('md')`
    width: calc((100% - 16px) / 2);
  `}

  &:nth-child(2n) {
    margin-right: 0;

    @media screen and (min-width: ${breakpoints.md}px) {
      margin-right: 12px;
    }
  }
`