import styled from 'styled-components'

export const LightBoxWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.dark}50;
    backdrop-filter: blur(5px);
  }
`

export const LightBoxContentWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const LightBoxContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 680px;
  width: calc(100% - 48px);
  max-height: calc(100vh - 48px);
  overflow: auto;
  background-color: #fff;
`