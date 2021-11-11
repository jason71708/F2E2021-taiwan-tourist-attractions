import { useMemo } from 'react'
import { famousCities, generateStaticImagePath } from '../../constants'
import useBreakpoint from '../../hooks/useBreakpoint'
import { City } from '../CityCard'

const availableCities: City[] = famousCities.map(city => 
  ({
    name: city.label,
    value: city.value,
    url: generateStaticImagePath(city.label, 'png')
  })
)

const sliceCities = (cities: City[], range: number) => {
  const result = []
  for (let i = 0; i <= cities.length - 1; i += range) {
    result.push(cities.slice(i, i + range))
  }
  return result
}

const seperateCities = (cityGroups: City[][]) => {
  return cityGroups.map(cityGroup => {
    return cityGroup.reduce((result, city, index) => {
      const currentPart = (index + 1) % 3
      const currentGroupIndex = Math.ceil((index + 1) / 3) - 1
      switch (currentPart) {
        case 0:
          result[(currentGroupIndex + 1) * 2 - 1].push(city)
          break
        case 1:
          result.push([city])
          break
        case 2:
          result.push([city])
          break
      }
      return result
    }, [] as City[][])
  })
}

function useCityGroups() {
  const isMdBp = useBreakpoint('md')
  const isLgBp = useBreakpoint('lg')

  return useMemo(() => {
    return isLgBp ? seperateCities(sliceCities(availableCities, 7)) :
      isMdBp ? seperateCities(sliceCities(availableCities.slice(0, 12), 6)) : // availableCities.slice(0, 12): In order to make it looks perfect.
      seperateCities(sliceCities(availableCities, 3))
  }, [isLgBp, isMdBp])

}

export default useCityGroups