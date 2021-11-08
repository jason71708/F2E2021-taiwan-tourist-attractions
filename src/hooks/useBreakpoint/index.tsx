import { useMediaQuery } from 'react-responsive'
import { breakpoints } from '../../styles/breakpoint'

function useBreakpoint(bp: string) {
  const isCurrentBp = useMediaQuery({ query: `(min-width: ${breakpoints[bp]}px)` })
  return isCurrentBp
}

export default useBreakpoint