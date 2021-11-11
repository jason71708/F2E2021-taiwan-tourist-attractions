import { generatePath, useNavigate, NavigateOptions } from 'react-router-dom'

function useNavigateParams() {
  const navigate = useNavigate()

  return (url: string, params: string, options?: NavigateOptions) => {
    const path = generatePath(':url?:queryString', {
      url,
      queryString: params
    })
    navigate(path, options)
  }
}

export default useNavigateParams