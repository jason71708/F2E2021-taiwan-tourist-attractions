import React from 'react'
import Card from '../Card'
import logo from '../../assets/image/logo.svg'
import { HeaderWrapper, LogoStyled } from './style'


function MainHeader() {
  return (
    <HeaderWrapper>
      <LogoStyled src={logo} alt="logo" />
      <div>
        <span>1</span>
        <span>1</span>
        <span>1</span>
      </div>
    </HeaderWrapper>
  )
}

export default MainHeader