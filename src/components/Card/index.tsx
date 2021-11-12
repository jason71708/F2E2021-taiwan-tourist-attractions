import ShadowEffectCard from '../ShadowEffectCard'
import LocationLink from '../LocationLink'

import {
  CardWrapper,
  ContentWrapper,
  CardImage,
  CardInformation,
  CardTitle,
  CardDescription
} from './style'

type CardInfo = {
  name: string
  imageUrl: string
  location?: string
  address?: string,
  description?: string,
  onClick?: () => void
}

function Card({ name, location, imageUrl, address, description, onClick }: CardInfo) {

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
            <CardTitle lineLimit={1}>{name}</CardTitle>
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