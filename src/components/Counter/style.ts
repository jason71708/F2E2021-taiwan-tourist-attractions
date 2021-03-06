import styled from 'styled-components'

export const CounterWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    cursor: pointer;
  }
`

export const CountButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
`

export const Count = styled.span`
  padding: 0 40px;
  margin-bottom: 6px;
  font-size: 20px;
`