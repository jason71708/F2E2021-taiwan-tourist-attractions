import React from 'react'
import Card from '../Card'
import logo from '../../assets/image/logo.svg'
import { HeaderWrapper, LogoStyled } from './style'
import NavBar from '../NavBar'


function MainHeader() {
  return (
    <HeaderWrapper>
      <LogoStyled src={logo} alt="logo" />
      <NavBar />
    </HeaderWrapper>
  )
}

export default MainHeader