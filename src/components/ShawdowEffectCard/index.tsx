import React from 'react'
import { CardWrapper, CardContent } from './style'

function ShawdowEffectCard({ children }: { children?: React.ReactNode }) {
  return (
    <CardWrapper>
      <CardContent>
        {children}
      </CardContent>
    </CardWrapper>
  )
}

export default ShawdowEffectCard