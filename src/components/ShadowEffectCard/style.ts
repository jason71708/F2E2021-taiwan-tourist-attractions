import styled from 'styled-components'
// import breakpoint from '../../styles/breakpoint'

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    left: 10px;
    bottom: 0px;
    display: inline-block;
    width: 33%;
    height: 33%;
    filter: blur(6px);
    background-color: rgba(0,0,0,0.5);
    transform: skewY(-8deg);
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    right: 10px;
    bottom: 0px;
    display: inline-block;
    width: 33%;
    height: 33%;
    filter: blur(6px);
    background-color: rgba(0,0,0,0.5);
    transform: skewY(8deg);
  }
`

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background-color: #fff;
`