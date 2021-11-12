import React from 'react'
import { LocationLinkWrapper, MapIconWrapper } from './style'
import Icons from '../Icons'

type LocationLinkProps = {
  location?: string
  address: string
}

function LocationLink({ location, address }: LocationLinkProps) {
  return (
    <LocationLinkWrapper
      href={process.env.REACT_APP_GOOGLE_MAP_SEARCH_LINK + address}
      target="_blank"
    >
      <MapIconWrapper>
        <Icons.Map />
      </MapIconWrapper>
      {location || address}
    </LocationLinkWrapper>
  )
}

export default LocationLink