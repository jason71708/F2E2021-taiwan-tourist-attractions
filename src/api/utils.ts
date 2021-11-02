import jsSHA from 'jssha'

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