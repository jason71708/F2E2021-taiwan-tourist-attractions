import { useMemo } from 'react'
import { useLocation } from 'react-router'

function useSearchParams() {
  const location = useLocation()
  const searchParams = useMemo(() => (
    new URLSearchParams(location.search)
  ), [location])
  return searchParams
}

export default useSearchParams