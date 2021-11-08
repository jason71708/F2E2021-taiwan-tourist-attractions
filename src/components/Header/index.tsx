import React from 'react'
import logo from '../../assets/image/logo.svg'
import { HeaderWrapper, LogoStyled } from './style'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'

function MainHeader() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoStyled src={logo} alt="logo" />
      </Link>
      <NavBar />
    </HeaderWrapper>
  )
}

export default MainHeader