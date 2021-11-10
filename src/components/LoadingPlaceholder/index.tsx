import React from 'react'
import Icons from '../Icons'
import { LoadingWrapper, ElementWrapper } from './style'

function LoadingPlaceholder() {
  return (
    <LoadingWrapper>
      <ElementWrapper>
        <Icons.Triangle />
      </ElementWrapper>
      <ElementWrapper>
        <Icons.Square />
      </ElementWrapper>
      <ElementWrapper>
        <Icons.Circle />
      </ElementWrapper>
    </LoadingWrapper>
  )
}

export default LoadingPlaceholder