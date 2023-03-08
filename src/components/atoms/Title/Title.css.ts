import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const title = style({
  margin: 0,
  marginBottom: theme.spacing.large,
});

export const tag = styleVariants({
  h1: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xlarge,
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
    '@media': {
      [queries.large]: {
        fontSize: theme.fontSizes.xxlarge,
      },
    },
  },
});

globalStyle(`${tag.h1} span`, {
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
