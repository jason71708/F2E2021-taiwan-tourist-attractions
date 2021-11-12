import { useEffect, useMemo, useRef, useState } from 'react'
import Card from '../Card'
import { SectionCardsWrapper, CountControllerWrapper, CountButtonWrapper, Count } from './style'
import { ScenicSpotTourismInfo } from '../../models/ScenicSpot'
import { HotelTourismInfo } from '../../models/Hotel'
import { RestaurantTourismInfo } from '../../models/Restaurant'
import ProblemPlaceholder, { Problems } from '../ProblemPlaceholder'
import Icons from '../Icons'
import useScroller from '../../hooks/useScroller'
import { sectionScrollOptions } from '../../constants'
import { Element as ScrollTarget } from 'react-scroll'

type SectionCardsProps = {
  items: ScenicSpotTourismInfo[] | HotelTourismInfo[] | RestaurantTourismInfo[],
  countsPerpage?: number,
  showCounter?: boolean
}

function SectionCards(
  { items, countsPerpage = 20, showCounter = true }: SectionCardsProps
) {
  const randomName = useRef(Math.random().toString(36).substring(7))
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
      <code>{items.length}</code>
      {showCounter && <CountControllerWrapper>
        <CountButtonWrapper>
          {currentPage > 1 && <Icons.VectorLeft onClick={() => {
            setCurrentPage(currentPage - 1)
            scroller.scrollTo()
          }} />}
        </CountButtonWrapper>
        <Count>{currentPage}</Count>
        <CountButtonWrapper>
          {currentPage < (Math.ceil(items.length / countsPerpage)) && <Icons.VectorRight onClick={() => {
            setCurrentPage(currentPage + 1)
            scroller.scrollTo()
          }}/>}
        </CountButtonWrapper>
      </CountControllerWrapper>}
    </ScrollTarget>
  )
}

export default SectionCards