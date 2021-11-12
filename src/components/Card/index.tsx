import ShadowEffectCard from '../ShadowEffectCard'
import LocationLink from '../LocationLink'

import {
  CardWrapper,
  ContentWrapper,
  CardImage,
  CardInformation,
  CardLinkTitle,
  CardTitle,
  CardDescription
} from './style'

type CardInfo = {
  name: string
  imageUrl: string
  location?: string
  address?: string,
  description?: string
  websiteUrl?: string
  onClick?: () => void
}

function Card({ name, location, imageUrl, address, description, websiteUrl, onClick }: CardInfo) {

  return (
    <CardWrapper onClick={() => {
      if (onClick) {
        onClick()
      }
    }}>
      <ShadowEffectCard>
        <ContentWrapper>
          <CardImage backgoundUrl={imageUrl} />
          <CardInformation>
            {websiteUrl ? (
              <CardLinkTitle href={websiteUrl} lineLimit={1} target="_blank" onClick={e => {
                e.stopPropagation()
              }}>{name}</CardLinkTitle>
            ): (
              <CardTitle lineLimit={1}>{name}</CardTitle>
            )}
            { (location && address) ?
              <LocationLink location={location} address={address} /> :
              description ?
              <CardDescription lineLimit={3}>{description}</CardDescription> : ''
            }
          </CardInformation>
        </ContentWrapper>
      </ShadowEffectCard>
    </CardWrapper>
  )
}

export default Card