import React, { useContext } from 'react'
import {
  Link,
  useMatch,
  useResolvedPath,
  useLocation
} from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { NavWrapper, LinkWrapper, LinkIcon, LinkText } from './style'
import triangleIcon from '../../assets/image/triangle-icon.svg'
import squareIcon from '../../assets/image/square-icon.svg'
import circleIcon from '../../assets/image/circle-icon.svg'


function NavBar() {
  const theme = useContext(ThemeContext)
  const location = useLocation()

  return (
    <NavWrapper>
      <LinkWrapper>
        <LinkIcon src={triangleIcon} />
        <Link to="/">
          <LinkText match={location.pathname === '/'} color={theme.colors.primary}>
            台灣景點
          </LinkText>
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <LinkIcon src={squareIcon} />
        <Link to="/accommodation">
          <LinkText match={location.pathname === '/accommodation'} color={theme.colors.secondary}>
            美食住宿
          </LinkText>
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <LinkIcon src={circleIcon} />
        <Link to="/traffic">
          <LinkText match={location.pathname === '/traffic'} color={theme.colors.tertiary}>
            景點交通
          </LinkText>
        </Link>
      </LinkWrapper>
    </NavWrapper>
  )
}

export default NavBar