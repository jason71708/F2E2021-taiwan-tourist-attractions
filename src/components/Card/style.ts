import styled from 'styled-components'
import breakpoint, { breakpoints } from '../../styles/breakpoint'
import { LimitLineCss } from '../../styles/helper'
import imagePlaceholder from '../../assets/images/image-placeholder.svg'
import { formatValidBackgroundUrl } from '../../utils'

export const CardWrapper = styled.div`
  width: calc((100% - 8px) / 2);
  height: 230px;
  margin-bottom: 18px;
  margin-right: 8px;
  transition: transform 0.2s linear;

  &:hover {
    transform: translateY(-10px);
  }

  ${breakpoint('md')`
    width: calc((100% - 36px) / 4);
    margin-right: 12px;
    height: 240px;
  `}

  ${breakpoint('lg')`
    width: calc((100% - 32px) / 5);
    margin-right: 8px;
    height: 270px;
  `}

  // styled-components-breakpoint doesn't support :nth selector
  &:nth-child(2n) {
    margin-right: 0;

    @media screen and (min-width: ${breakpoints.md}px) {
      margin-right: 12px;
    }

    @media screen and (min-width: ${breakpoints.lg}px) {
      margin-right: 8px;
    }
  }

  &:nth-child(4n) {
    @media screen and (min-width: ${breakpoints.md}px) {
      margin-right: 0;
    }

    @media screen and (min-width: ${breakpoints.lg}px) {
      margin-right: 8px;
    }
  }

  &:nth-child(5n) {
    @media screen and (min-width: ${breakpoints.lg}px) {
      margin-right: 0px;
    }
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  ${breakpoint('lg')`
    padding: 16px;
  `}
`

type CardImageProps = {
  backgoundUrl: string
}

export const CardImage = styled.div.attrs<CardImageProps>(props => ({
  style: {
    backgroundImage: `url(${formatValidBackgroundUrl(props.backgoundUrl)}), url(${imagePlaceholder})`
  }
}))<CardImageProps>`
  flex-shrink: 0;
  width: 100%;
  height: 120px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 4px;

  ${breakpoint('lg')`
    height: 150px;
  `}
`

export const CardInformation = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardLinkTitle = styled.a`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  ${LimitLineCss}

  &:hover {
    text-decoration: underline;
  }

  ${breakpoint('lg')`
    font-size: 16px;
  `}
`

export const CardTitle = styled.h5`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  ${LimitLineCss}

  ${breakpoint('lg')`
    font-size: 16px;
  `}
`

export const CardDescription = styled.p`
  ${LimitLineCss};
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.gray};
`