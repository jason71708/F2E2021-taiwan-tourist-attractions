import { CounterWrapper, CountButtonWrapper, Count } from './style'
import Icons from '../Icons'

type CounterProps = {
  onChange: (value: number) => void,
  currentPage: number,
  maxPage: number
}

function Counter({ onChange, currentPage, maxPage }: CounterProps) {
  return (
  <CounterWrapper>
    <CountButtonWrapper>
      {currentPage > 1 && <Icons.VectorLeft onClick={() => {
        onChange(currentPage - 1)
      }} />}
    </CountButtonWrapper>
    <Count>{currentPage}</Count>
    <CountButtonWrapper>
      {currentPage < maxPage && <Icons.VectorRight onClick={() => {
        onChange(currentPage + 1)
      }}/>}
    </CountButtonWrapper>
  </CounterWrapper>
  )
}

export default Counter