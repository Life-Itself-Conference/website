import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../theme.css';

globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box',
});

export const html = style({
  scrollBehavior: 'smooth',
  scrollPaddingTop: theme.headerHeight,
});

export const body = style({
  backgroundColor: theme.colors.black,
  color: theme.colors.white,
  fontFamily: theme.fontFamilies.base,
  fontSize: theme.fontSizes.large,
  margin: 0,
});

globalStyle('p', {
  margin: `0 0 ${theme.spacing.medium}`,
});
