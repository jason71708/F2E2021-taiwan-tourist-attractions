import axios from 'axios'
import { TDX_API_URL } from '../constants'

// https://tdx.transportdata.tw/
export const tdxAPI = axios.create({
  baseURL: TDX_API_URL
})