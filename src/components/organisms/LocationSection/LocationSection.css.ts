import { globalStyle, style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const container = style({
  padding: 0,
});

export const content = style({
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '0 !important',
  textAlign: 'left',

  '@media': {
    [queries.large]: {
      flexDirection: 'row',
      height: 600,
      justifyContent: 'space-between',
      paddingBlock: theme.spacing.large,
      paddingInline: `${theme.spacing.large} !important`,
      position: 'relative',
    },
  },
});

export const video = style({
  height: '100%',
  inset: 0,
  objectFit: 'cover',
  position: 'absolute',
  width: '100%',
  zIndex: -1,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 300,
  padding: theme.spacing.medium,
  position: 'relative',
  textTransform: 'uppercase',
  width: '100%',

  '@media': {
    [queries.large]: {
      padding: 0,
      position: 'static',
    },
  },
});

globalStyle(`${header} h2`, {
  display: 'flex',
  flexDirection: 'column',
  fontSize: theme.fontSizes.xxxlarge,
  fontWeight: 'bold',
  lineHeight: '1em',
  margin: 0,
  marginBottom: theme.spacing.small,
  maxWidth: 500,
});

globalStyle(`${header} h2 sub`, {
  fontSize: '0.5em',
  fontWeight: 'normal',
  lineHeight: '1em',
});

export const footer = style({
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  fontSize: theme.fontSizes.small,
  padding: theme.spacing.medium,

  '@media': {
    [queries.large]: {
      maxWidth: 600,
    },
  },
});
