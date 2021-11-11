import React, { useMemo } from 'react'
import { useLocation } from 'react-router'

function useSearchParams() {
  const { search } = useLocation()
  const searchParams = useMemo(() => (
    new URLSearchParams(search)
  ), [search])
  return searchParams
}

export default useSearchParams