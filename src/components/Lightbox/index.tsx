import { useEffect } from 'react'
import {
  LightBoxWrapper,
  LightBoxContentWrapper,
  LightBoxContent,
} from './style'

function Lightbox({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <LightBoxWrapper>
      <LightBoxContentWrapper onClick={e => {
        e.stopPropagation()
        onClose()
      }}>
        <LightBoxContent onClick={e => {
          e.stopPropagation()
          console.log('LightBoxContent')
        }}>
          <h1>133</h1>
          <h1>133</h1>
          <h1>133</h1>
          <h1>133</h1>
          <h1>133</h1>
          <h1>133</h1>
        </LightBoxContent>
      </LightBoxContentWrapper>
    </LightBoxWrapper>
  )
}

export default Lightbox;
