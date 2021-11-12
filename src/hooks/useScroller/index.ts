import { useMemo } from 'react'
import { scroller as reactScroll } from 'react-scroll'
import { PlainObject } from '../../constants'

function useScroller(defaultScrollTarget: string, defaultOptions?: PlainObject) {
  const scroller = useMemo(() => ({
    scrollTo: (scrollTarget?: string, options?: typeof Object) => {
      reactScroll.scrollTo(
        scrollTarget || defaultScrollTarget,
        options || defaultOptions || {
          duration: 1000,
          delay: 100,
          smooth: true,
          offset: -20
        }
      )
    }
  }), [defaultOptions, defaultScrollTarget])

  return scroller
}

export default useScroller