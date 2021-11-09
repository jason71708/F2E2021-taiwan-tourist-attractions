import axios from 'axios'
import { TDX_API_URL } from '../constants'
import { getAuthorizationHeader } from './utils'

// https://tdx.transportdata.tw/
export const tdxAPI = axios.create({
  baseURL: TDX_API_URL,
  headers: getAuthorizationHeader()
})