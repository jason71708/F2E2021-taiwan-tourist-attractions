import React from 'react'
import { LocationLinkWrapper, MapIconWrapper } from './style'
import { ReactComponent as MapIcon } from '../../assets/image/map.svg'

type LocationLinkProps = {
  location: string
  address: string
}

function LocationLink({ location, address }: LocationLinkProps) {
  return (
    <LocationLinkWrapper
      href={process.env.REACT_APP_GOOGLE_MAP_SEARCH_LINK + address}
      target="_blank"
    >
      <MapIconWrapper>
        <MapIcon />
      </MapIconWrapper>
      {location}
    </LocationLinkWrapper>
  )
}

export default LocationLink