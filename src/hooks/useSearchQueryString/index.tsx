import React from 'react'
import { useLocation } from 'react-router'
import { scenicSpotPageSeachOptions, accommodationPageSeachOptions, cityOptions } from '../../constants'

const scenicSpotPageSeachValues = scenicSpotPageSeachOptions.map(option => option.value)
const accommodationPageSeachValues = accommodationPageSeachOptions.map(option => option.value)
const cityValues = cityOptions.map(option => option.value)

export enum SearchType {
  ScenicSpotPage,
  AccommodationPage
}

function isCorrectOption<T>(target: T, options: T[], defaultOption: T) {
  return options.find(option => option === target) || defaultOption
}

type SearchQueryString = string | null | undefined

function useSearchQueryString(searchType: SearchType) {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const keywords: SearchQueryString = searchParams.get('keywords')?.trim() || null
  let city: SearchQueryString = searchParams.get('city')?.trim() || null
  let category: SearchQueryString = searchParams.get('category')?.trim() || null
  city = isCorrectOption<string | null>(city, cityValues, cityValues[0])
  if (searchType === SearchType.ScenicSpotPage) {
    category = isCorrectOption<string | null>(category, scenicSpotPageSeachValues, scenicSpotPageSeachValues[0])
  } else if (searchType === SearchType.AccommodationPage) {
    category = isCorrectOption<string | null>(category, accommodationPageSeachValues, scenicSpotPageSeachValues[0])
  }
  return { city, keywords, category }
}

export default useSearchQueryString