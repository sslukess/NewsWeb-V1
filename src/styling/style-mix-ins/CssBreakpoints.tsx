import { css } from 'styled-components';

export enum breakpointSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

export const breakpoints = {
  xs: 350,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const getWidthRequirement = rule => {
  if (rule === 'up') {
    return 'min-width';
  } else {
    return 'max-width';
  }
};

const getMediaQuery = (breakpoints, key: string, rule = 'up') => () => (...args) => {
  const cssEval = css`
      @media (${getWidthRequirement(rule)}: ${rule === 'down' ? breakpoints[key] - 1 : breakpoints[key]}px) {
        ${css(...args)}
      }`;
  return cssEval;
};

export const breakpoint = {
  up: (widthKey: string) => getMediaQuery(breakpoints, widthKey, 'up')(),
  down: (widthKey: string) => getMediaQuery(breakpoints, widthKey, 'down')(),
};

