import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../theme.css';

globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box',
});

export const body = style({
  backgroundColor: theme.colors.black,
  color: theme.colors.white,
  fontFamily: theme.fontFamilies.base,
  fontSize: theme.fontSizes.large,
  margin: 0,
});
