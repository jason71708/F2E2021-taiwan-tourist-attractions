import { useEffect, useMemo, useRef, useState } from 'react'
import ActivityCard from '../ActivityCard'
import { SectionActivityWrapper } from './style'
import { ActivityTourismInfo } from '../../models/Activity'
import ProblemPlaceholder, { Problems } from '../ProblemPlaceholder'
import useScroller from '../../hooks/useScroller'
import { sectionScrollOptions } from '../../constants'
import { Element as ScrollTarget } from 'react-scroll'
import Counter from '../Counter'
import { generateRandomString } from '../../utils'

type SectionActivityProps = {
  items: ActivityTourismInfo[],
  countsPerpage?: number,
  showCounter?: boolean
}

function SectionActivity(
  { items, countsPerpage = 20, showCounter = true }: SectionActivityProps
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
      <SectionActivityWrapper>
        {currentPageItems.map(item => (
          <ActivityCard
            key={item.ID}
            name={item.Name}
            location={item.Location}
            imageUrl={item.Picture.PictureUrl1}
            address={item.Address}
            description={item.Description}
          />
        ))}
        {items.length === 0 && <ProblemPlaceholder problem={Problems.NoResult}/>}
      </SectionActivityWrapper>
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

export default SectionActivity