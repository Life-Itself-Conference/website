import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from './theme.css';

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

globalStyle(`${body}.modal-open`, {
  overflow: 'hidden',
});

globalStyle(`${body}.preview`, {
  display: 'none',
});

globalStyle('a', {
  color: theme.colors.red,
  fontWeight: 'bold',
  textDecoration: 'none',
});

globalStyle('p', {
  margin: `0 0 ${theme.spacing.medium}`,
});

globalStyle('hr', {
  borderColor: theme.colors.red,
  marginBlock: theme.spacing.xlarge,
});
