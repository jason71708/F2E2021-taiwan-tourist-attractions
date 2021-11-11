import { useMemo } from 'react'
import useSearchParams from '../useSearchParams'
import { scenicSpotPageSeachOptions, accommodationPageSeachOptions, cityOptions } from '../../constants'

const scenicSpotPageSeachValues = scenicSpotPageSeachOptions.map(option => option.value)
const accommodationPageSeachValues = accommodationPageSeachOptions.map(option => option.value)
const cityValues = cityOptions.map(option => option.value)

export enum SearchType {
  ScenicSpotPage = 'ScenicSpotPage',
  AccommodationPage = 'AccommodationPage'
}

function isCorrectOption<T>(target: T, options: T[], defaultOption: T) {
  return options.find(option => option === target) || defaultOption
}

type SearchQueryString = string | null | undefined

function useSearchQueryString(searchType: SearchType) {
  const searchParams = useSearchParams()

  const queryStrings = useMemo(() => {
    const keywords: SearchQueryString = searchParams.get('keywords')?.trim() || ''
    let city: SearchQueryString = searchParams.get('city')?.trim() || null
    let category: SearchQueryString = searchParams.get('category')?.trim() || null
    city = isCorrectOption<string | null>(city, cityValues, cityValues[0])
    if (searchType === SearchType.ScenicSpotPage) {
      category = isCorrectOption<string | null>(category, scenicSpotPageSeachValues, scenicSpotPageSeachValues[0])
    } else if (searchType === SearchType.AccommodationPage) {
      category = isCorrectOption<string | null>(category, accommodationPageSeachValues, accommodationPageSeachValues[0])
    }
    return { city, keywords, category }
  }, [searchParams, searchType])

  return queryStrings
}

export default useSearchQueryString