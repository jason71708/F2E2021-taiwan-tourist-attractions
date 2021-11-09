import React from 'react'
import { LocationLinkWrapper, MapIconWrapper } from './style'
import { ReactComponent as MapIcon } from '../../assets/image/map.svg'

type LocationLinkProps = {
  locationName: string
  detailLocation: string
}

function LocationLink({ locationName, detailLocation }: LocationLinkProps) {
  return (
    <LocationLinkWrapper
      href={process.env.REACT_APP_GOOGLE_MAP_SEARCH_LINK + detailLocation}
      target="_blank"
    >
      <MapIconWrapper>
        <MapIcon />
      </MapIconWrapper>
      {locationName}
    </LocationLinkWrapper>
  )
}

export default LocationLink