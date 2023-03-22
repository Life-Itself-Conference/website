import { createGlobalTheme } from '@vanilla-extract/css';

export const queries = {
  large: 'screen and (min-width: 1200px)',
};

export const theme = createGlobalTheme(':root', {
  colors: {
    black: '#000',
    red: '#ff3254',
    white: '#fff',
  },
  fontFamilies: {
    base: '"Noto Sans", sans-serif',
  },
  fontSizes: {
    xxsmall: '10px',
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '24px',
    xxlarge: '48px',
  },
  spacing: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '32px',
    xlarge: '64px',
    xxlarge: '100px',
  },
  breakpoints: {
    large: '1200px',
  },
});
