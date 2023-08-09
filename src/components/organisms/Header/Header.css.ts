import { globalStyle, style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';
import { button } from '../../atoms/Button/Button.css';

export const header = style({
  alignItems: 'center',
  backgroundColor: theme.colors.black,
  display: 'flex',
  height: theme.headerHeight,
  justifyContent: 'space-between',
  padding: theme.spacing.small,
  position: 'sticky',
  textTransform: 'uppercase',
  top: 0,
  zIndex: 998,

  '@media': {
    [queries.large]: {
      paddingInline: theme.spacing.large,
    },
  },
});

export const logo = style({
  backgroundImage: 'url(/logo.png)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  display: 'block',
  flexShrink: 0.5,
  height: 22,
  overflow: 'hidden',
  textDecoration: 'none',
  width: 160,
});

globalStyle(`${logo} > span`, {
  fontSize: 0,
});

export const trigger = style({
  backgroundColor: 'transparent',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  fontSize: theme.fontSizes.xlarge,

  '@media': {
    [queries.large]: {
      display: 'none',
    },
  },
});

export const nav = style({
  alignItems: 'flex-start',
  backgroundColor: theme.colors.black,
  display: 'flex',
  fontSize: theme.fontSizes.large,
  inset: `${theme.headerHeight} 0 0`,
  justifyContent: 'center',
  padding: theme.spacing.xlarge,
  position: 'fixed',
  translate: '100%',

  '@media': {
    [queries.large]: {
      backgroundColor: 'transparent',
      display: 'block',
      fontSize: theme.fontSizes.small,
      inset: 'unset',
      padding: 'unset',
      position: 'unset',
      transition: 'unset',
      translate: 'unset',
    },
  },
});

globalStyle(`${nav}[data-open="true"]`, {
  translate: 0,
});

export const list = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.large,
  listStyle: 'none',
  margin: 0,
  padding: 0,

  '@media': {
    [queries.large]: {
      flexDirection: 'row',
    },
  },
});

globalStyle(`${list} > li`, {
  position: 'relative',
});

globalStyle(`${list} > li > button:not(${button})`, {
  background: 'none',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  padding: 0,
  textTransform: 'inherit',
  whiteSpace: 'nowrap',
});

globalStyle(`${list} > li > ul`, {
  display: 'none',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'absolute',
  top: '100%',
});

globalStyle(`${list} > li:hover > ul`, {
  display: 'block',
});

export const healthAndSafety = style({});

globalStyle(`${list} a:where(:not(${button}, ${healthAndSafety}))`, {
  color: 'inherit',
  fontWeight: 'normal',
  whiteSpace: 'nowrap',
});

export const buttons = style({
  display: 'flex',
  gap: theme.spacing.xsmall,
});
