import { css } from 'styled-components';
import { breakpoints, mediaQueries } from './breakpoints';

export const responsive = (breakpoint: keyof typeof breakpoints) => {
  return (strings: TemplateStringsArray, ...values: any[]) => {
    return css`
      ${mediaQueries[breakpoint]} {
        ${css(strings, ...values)}
      }
    `;
  };
};

export { breakpoints, mediaQueries };
