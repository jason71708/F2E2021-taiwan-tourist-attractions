import { useCallback } from 'react'
import { generatePath, useNavigate, NavigateOptions } from 'react-router-dom'

function useNavigateParams() {
  const navigate = useNavigate()

  return useCallback((url: string, params: string, options?: NavigateOptions) => {
    const path = generatePath(':url?:queryString', {
      url,
      queryString: params
    })
    navigate(path, options)
  }, [navigate])
}

export default useNavigateParams