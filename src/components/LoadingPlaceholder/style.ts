import styled, { keyframes } from 'styled-components'

const pluse = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, 0);
  }
}
`

export const LoadingWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ElementWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 4px;

  &:nth-last-child(1) {
    animation: ${pluse} 0.6s 0.1s linear infinite;
  }
  &:nth-last-child(2) {
    animation: ${pluse} 0.6s 0.2s linear infinite;
  }
  &:nth-last-child(3) {
    animation: ${pluse} 0.6s 0.3s linear infinite;
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`