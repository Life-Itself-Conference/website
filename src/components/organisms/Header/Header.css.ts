import { globalStyle, style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const header = style({
  alignItems: 'center',
  backgroundColor: theme.colors.black,
  display: 'flex',
  fontSize: theme.fontSizes.small,
  height: theme.headerHeight,
  justifyContent: 'space-between',
  paddingBlock: theme.spacing.medium,
  paddingInline: theme.spacing.large,
  position: 'sticky',
  top: 0,
  zIndex: 998,
});

export const logo = style({
  backgroundImage: 'url(/logo.png)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  display: 'block',
  height: 22,
  overflow: 'hidden',
  textDecoration: 'none',
  width: 160,
});

globalStyle(`${logo} > span`, {
  fontSize: 0,
});

export const nav = style({
  display: 'none',
  '@media': {
    [queries.large]: {
      display: 'block',
    },
  },
});

export const list = style({
  alignItems: 'center',
  display: 'flex',
  gap: theme.spacing.large,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

globalStyle(`${list} a`, {
  color: 'inherit',
  textDecoration: 'none',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
});

export const buttons = style({
  display: 'flex',
  gap: theme.spacing.xsmall,
});
