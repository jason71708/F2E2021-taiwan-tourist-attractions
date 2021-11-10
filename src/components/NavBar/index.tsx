import React, { useContext } from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { NavWrapper, LinkWrapper, LinkIcon, LinkText } from './style'
import triangleIcon from '../../assets/image/triangle-icon.svg'
import squareIcon from '../../assets/image/square-icon.svg'
import circleIcon from '../../assets/image/circle-icon.svg'
import { Paths } from '../../constants'

function NavBar() {
  const theme = useContext(ThemeContext)
  const location = useLocation()

  return (
    <NavWrapper>
      <LinkWrapper>
        <LinkIcon src={triangleIcon} />
        <Link to={Paths.ScenicSpots}>
          <LinkText match={location.pathname === Paths.ScenicSpots} color={theme.colors.primary}>
            景點活動
          </LinkText>
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <LinkIcon src={squareIcon} />
        <Link to={Paths.Accommodations}>
          <LinkText match={location.pathname === Paths.Accommodations} color={theme.colors.secondary}>
            美食住宿
          </LinkText>
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <LinkIcon src={circleIcon} />
        <Link to={Paths.Traffic}>
          <LinkText match={location.pathname === Paths.Traffic} color={theme.colors.tertiary}>
            交通查詢
          </LinkText>
        </Link>
      </LinkWrapper>
    </NavWrapper>
  )
}

export default NavBar