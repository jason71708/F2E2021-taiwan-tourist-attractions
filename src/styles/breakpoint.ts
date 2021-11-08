import { createBreakpoint } from 'styled-components-breakpoint'

type Breakpoint = {
  [bp: string]: number
}

export const breakpoints: Breakpoint = {
  xs: 0,
  sm: 360,
  md: 768,
  lg: 1280,
  xl: 1440
}

const breakpoint = createBreakpoint(breakpoints)

export default breakpoint