import jsSHA from 'jssha'
import { TDXAPIParameters } from './types'

export const getAuthorizationHeader = () => {
  const UTCTime = new Date().toUTCString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(process.env.REACT_APP_TDX_APP_KEY || '', 'TEXT')
  ShaObj.update('x-date: ' + UTCTime)
  let HMAC = ShaObj.getHMAC('B64')
  let Authorization = 'hmac username="' + process.env.REACT_APP_TDX_APP_ID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'
  return {
    Authorization,
    'X-Date': UTCTime
  } 
}

// Force to have `Name` and `Picture.PictureUrl1` fields
export const getPathWithQueryString = (path: string, { page = 1, perpageCounts = 4, keywords, city }: TDXAPIParameters) => {
  console.log('keywords, city')
  console.log(keywords, city)
  const filter = `Picture/PictureUrl1 ne null${keywords ? ` and (contains(Name, '${keywords}') or contains(Description, '${keywords}'))` : ''}`
  return `${path}${city ? '/' + city : ''}?$filter=${filter}&$top=${perpageCounts}&$skip=${(page - 1) * 4}&$format=JSON`
}