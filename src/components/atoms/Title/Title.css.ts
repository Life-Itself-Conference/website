import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const title = style({
  color: theme.colors.white,
  margin: 0,
  marginBottom: theme.spacing.large,
  position: 'relative',
  textAlign: 'center',
  textTransform: 'uppercase',
  ':before': {
    backgroundColor: theme.colors.red,
    content: '',
    display: 'block',
    height: 1,
    position: 'absolute',
    top: '50%',
    translate: '0 -50%',
    width: '100%',
    zIndex: -1,
  },
});

export const tag = styleVariants({
  h1: {
    fontSize: theme.fontSizes.xlarge,
    '@media': {
      [queries.large]: {
        fontSize: theme.fontSizes.xxlarge,
      },
    },
  },
  h2: {
    fontSize: theme.fontSizes.large,
    '@media': {
      [queries.large]: {
        fontSize: theme.fontSizes.xxlarge,
      },
    },
  },
});

globalStyle(`${title} span`, {
  backgroundColor: theme.colors.black,
  display: 'inline-block',
  paddingInline: theme.spacing.large,
  minWidth: 200,
  '@media': {
    [queries.large]: {
      minWidth: 350,
    },
  },
});
