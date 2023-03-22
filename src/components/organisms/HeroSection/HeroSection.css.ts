import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';
import { button } from '../../atoms/Button/Button.css';

const marqueeKeyframes = keyframes({
  '0%': { transform: `translateX(0)` },
  '100%': { transform: `translateX(-100%)` },
});

export const container = style({
  alignItems: 'flex-start',
  display: 'flex',
  minHeight: `calc(100vh - ${theme.headerHeight})`,
  textAlign: 'center',

  '@media': {
    [queries.large]: {
      paddingTop: '20vh',
      textAlign: 'left',
    },
  },
});

export const content = style({
  marginBottom: theme.spacing.medium,

  '@media': {
    [queries.large]: {
      maxWidth: 535,
    },
  },
});

export const meta = style({
  fontSize: theme.fontSizes.medium,
});

export const title = style({
  aspectRatio: '23 / 3',
  backgroundImage: `url(/life-itself.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  height: 42,
  marginBlock: theme.spacing.medium,
  marginInline: 'auto',
  '@media': {
    [queries.large]: {
      height: 60,
      marginInline: 'initial',
    },
  },
});

globalStyle(`${title} > span`, {
  fontSize: 0,
});

export const tagline = style({
  fontSize: theme.fontSizes.small,

  '@media': {
    [queries.large]: {
      fontSize: theme.fontSizes.xlarge,
    },
  },
});

export const buttons = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.small,
  justifyContent: 'center',
  '@media': {
    [queries.large]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  },
});

globalStyle(`${buttons} ${button}`, {
  maxWidth: 350,
  width: '100%',
});

export const marquee = style({
  backgroundColor: theme.colors.white,
  color: theme.colors.black,
  display: 'flex',
  fontSize: theme.fontSizes.medium,
  paddingBlock: theme.spacing.medium,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

globalStyle(`${marquee} ul`, {
  alignItems: 'center',
  animation: `${marqueeKeyframes} 30s linear infinite`,
  display: 'flex',
  gap: theme.spacing.xxlarge,
  listStyle: 'none',
  margin: 0,
  paddingLeft: theme.spacing.xxlarge,
  willChange: 'transform',
});

globalStyle(`${marquee} img`, {
  display: 'block',
  height: 30,
  objectFit: 'contain',
  maxWidth: 150,
});
