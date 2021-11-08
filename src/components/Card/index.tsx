import React from 'react'
import { CardWrapper, CardContent } from './style'

function Card({ children }: { children?: React.ReactNode }) {
  return (
    <CardWrapper>
      <CardContent>
        {children}
      </CardContent>
    </CardWrapper>
  )
}

export default Card