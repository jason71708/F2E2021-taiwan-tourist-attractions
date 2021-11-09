import { css } from 'styled-components'

export const shawdowCss = css`
  box-shadow: 0 4px 4px 0 ${props => props.theme.colors.dark}33;
`

type LimitLineCssProps = {
  lineLimit: number
}

export const LimitLineCss = css<LimitLineCssProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.lineLimit};
  -webkit-box-orient: vertical;
`