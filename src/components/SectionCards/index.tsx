import { useEffect, useMemo, useRef, useState } from 'react'
import Card from '../Card'
import { SectionCardsWrapper } from './style'
import { ScenicSpotTourismInfo } from '../../models/ScenicSpot'
import { HotelTourismInfo } from '../../models/Hotel'
import { RestaurantTourismInfo } from '../../models/Restaurant'
import { ActivityTourismInfo } from '../../models/Activity'
import ProblemPlaceholder, { Problems } from '../ProblemPlaceholder'
import useScroller from '../../hooks/useScroller'
import { sectionScrollOptions } from '../../constants'
import { Element as ScrollTarget } from 'react-scroll'
import Counter from '../Counter'
import { generateRandomString } from '../../utils'

type SectionCardsProps = {
  items: ScenicSpotTourismInfo[] | HotelTourismInfo[] | RestaurantTourismInfo[] | ActivityTourismInfo[],
  countsPerpage?: number,
  showCounter?: boolean
}

function SectionCards(
  { items, countsPerpage = 20, showCounter = true }: SectionCardsProps
) {
  const randomName = useRef(generateRandomString())
  const scroller = useScroller(randomName.current, sectionScrollOptions)
  const [currentPage, setCurrentPage] = useState(1)

  const currentPageItems = useMemo(() => {
    return items.slice((currentPage - 1) * countsPerpage, currentPage * countsPerpage)
  }, [countsPerpage, items, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [items])

  return (
    <ScrollTarget name={randomName.current}>
      <SectionCardsWrapper>
        {currentPageItems.map(item => (
          <Card
            key={item.ID}
            name={item.Name}
            location={item.City}
            imageUrl={item.Picture.PictureUrl1}
            address={item.Address}
            description={item.Description || item.DescriptionDetail}
          />
        ))}
        {items.length === 0 && <ProblemPlaceholder problem={Problems.NoResult}/>}
      </SectionCardsWrapper>
      {showCounter && items.length > countsPerpage && (
        <Counter
          currentPage={currentPage}
          maxPage={Math.ceil(items.length / countsPerpage)}
          onChange={(value: number) => {
            setCurrentPage(value)
            scroller.scrollTo()
          }}
        />
      )}
    </ScrollTarget>
  )
}

export default SectionCards