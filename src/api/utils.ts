import { TDXAPIParameters } from './types'

// Force to have `Name` and `Picture.PictureUrl1` fields
export const getPathWithQueryString = (path: string, { limit = 600, keywords, city }: TDXAPIParameters, nameField: string) => {
  const filter = `Picture/PictureUrl1 ne null and ${nameField} ne null${keywords
      ? ` and (contains(${nameField}, '${keywords}') or contains(Description, '${keywords}'))`
      : ""
    }`;
  const top = `&$top=${limit}`
  return `${path}${city ? '/' + city : ''}?$filter=${filter}${top}&$format=JSON`
}