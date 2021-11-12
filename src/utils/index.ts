export const formatValidBackgroundUrl = (url: string) => {
  return url.replace(/[()]/g, c => {
    return '\\' + c.charCodeAt(0).toString(16);
  })
}

export const generateRandomString = () => {
  return Math.random().toString(36).substring(7)
}
