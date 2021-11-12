import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'
import { LimitLineCss } from '../../styles/helper'
import imagePlaceholder from '../../assets/images/image-placeholder.svg'
import { formatValidBackgroundUrl } from '../../utils'

export const ActivityCardWrapper = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 16px;

  ${breakpoint('md')`
    width: 49%;
  `}

  ${breakpoint('lg')`
    width: 525px;
    height: 236px;
  `}
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;

  ${breakpoint('lg')`
    padding: 16px;
  `}
`

export const ActivityInformation = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ActivityLinkTitle = styled.a`
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

export const ActivityTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  ${LimitLineCss}

  ${breakpoint('lg')`
    font-size: 16px;
  `}
`

export const ActivityDescription = styled.p`
  ${LimitLineCss};
  display: none;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.gray};

  ${breakpoint('lg')`
    display: -webkit-box;
  `}
`

export const ActivityRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DetailButton = styled.button`
  display: none;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  padding: 8px 32px;
  border-radius: 8px;

  &:hover {
    color: #fff;
    background-color: ${props => props.theme.colors.primary};
  }

  ${breakpoint('lg')`
    display: inline-block;
  `}
`

type ActivityImageProps = {
  backgoundUrl: string
}

export const ActivityImage = styled.div.attrs<ActivityImageProps>(props => ({
  style: {
    backgroundImage: `url(${formatValidBackgroundUrl(props.backgoundUrl)}), url(${imagePlaceholder})`
  }
}))<ActivityImageProps>`
  flex-shrink: 0;
  width: 100px;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 16px;

  ${breakpoint('lg')`
    width: 187px;
  `}
`