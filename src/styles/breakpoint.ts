import { createBreakpoint } from 'styled-components-breakpoint'

const breakpoints = {
  xs: 0,
  sm: 360,
  md: 768,
  lg: 1280,
  xl: 1440
}

const breakpoint = createBreakpoint(breakpoints);

export default breakpoint