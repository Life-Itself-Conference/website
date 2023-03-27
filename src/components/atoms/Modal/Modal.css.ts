import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const dialog = style({
  backgroundColor: theme.colors.black,
  border: 0,
  color: theme.colors.white,
  gridTemplateRows: 'auto 1fr',
  height: '100%',
  margin: 0,
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  padding: 0,
  position: 'fixed',
  width: '100%',
  zIndex: 999,

  '@media': {
    [queries.large]: {
      left: '50%',
      height: 'fit-content',
      top: '50%',
      translate: '-50% -50%',
      width: 768,
    },
  },
});

export const size = styleVariants({
  small: {
    '@media': {
      [queries.large]: {
        width: 456,
      },
    },
  },
});

export const variant = styleVariants({
  condensed: {},
});

globalStyle(`${dialog}[open]`, {
  display: 'grid',
});

globalStyle(`${dialog}::backdrop`, {
  backgroundColor: 'rgba(50, 50, 50, 0.9)',
  pointerEvents: 'none',
});

export const header = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  paddingBlock: theme.spacing.small,
  paddingInline: theme.spacing.medium,

  '@media': {
    [queries.large]: {
      padding: 0,
    },
  },
});

export const logo = style({
  height: 15,

  '@media': {
    [queries.large]: {
      display: 'none',
    },
  },
});

export const close = style({
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  border: 'none',
  color: 'currentcolor',
  cursor: 'pointer',
  display: 'flex',
  height: theme.spacing.large,
  justifyContent: 'center',
  width: theme.spacing.large,
  zIndex: 1,

  '@media': {
    [queries.large]: {
      position: 'absolute',
      right: theme.spacing.small,
      top: theme.spacing.small,
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  padding: `${theme.spacing.large} ${theme.spacing.large}`,
});

globalStyle(`${variant.condensed} ${content}`, {
  padding: '0',
});
