import axios from 'axios'
import { TDX_API_URL } from '../constants'
import { getAuthorizationHeader } from './utils'

export const tdxAPI = axios.create({
  baseURL: TDX_API_URL,
  headers: getAuthorizationHeader(),
  params: {
    $top: 10
  }
})

// $filter
// $top
// $skip