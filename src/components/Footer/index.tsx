import React from 'react'
import { FooterWrapper, FooterLink } from './style'

function Footer() {
  return (
    <FooterWrapper>
      {process.env.REACT_APP_TITLE} ©
      Developer: <FooterLink href="https://github.com/jason71708?tab=repositories" target="_blank">Jason Zhuang</FooterLink> /
      Designer: <FooterLink href="https://www.behance.net/KT_Designer" target="_blank">KT</FooterLink>
    </FooterWrapper>
  )
}

export default Footer