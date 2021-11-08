import React from 'react'
import logo from '../../assets/image/logo.svg'
import { HeaderWrapper, LogoStyled, LinkStyle } from './style'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <HeaderWrapper>
      <Link style={LinkStyle} to="/">
        <LogoStyled src={logo} alt="logo" />
      </Link>
      <NavBar />
    </HeaderWrapper>
  )
}

export default Header