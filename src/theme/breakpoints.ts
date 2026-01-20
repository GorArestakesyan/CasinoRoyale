export const breakpoints = {
  xs: '375px',
  sm: '480px',
  md: '768px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1920px',
} as const;

export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
  xsMax: `@media (max-width: ${parseInt(breakpoints.sm)}px)`,
  smMax: `@media (max-width: ${parseInt(breakpoints.md)}px)`,
  mdMax: `@media (max-width: ${parseInt(breakpoints.lg)}px)`,
  lgMax: `@media (max-width: ${parseInt(breakpoints.xl)}px)`,
  xlMax: `@media (max-width: ${parseInt(breakpoints.xxl)}px)`,
} as const;

export type Breakpoint = keyof typeof breakpoints;
