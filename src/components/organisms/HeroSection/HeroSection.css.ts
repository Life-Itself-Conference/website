import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';
import { button } from '../../atoms/Button/Button.css';

const bounceKeyframes = keyframes({
  '50%': {
    transform: 'translateY(-20px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

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
      paddingTop: '18vh',
      textAlign: 'left',
    },
  },
});

export const grid = style({
  display: 'flex',
  flexDirection: 'column',
  columnGap: theme.spacing.xlarge,

  '@media': {
    [queries.large]: {
      alignItems: 'flex-end',
      display: 'grid',
      flexDirection: 'unset',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr auto',
    },
  },
});

export const content = style({
  order: 3,
  marginBottom: theme.spacing.medium,

  '@media': {
    [queries.large]: {
      gridColumn: 1,
      gridRow: 1,
      order: 'unset',
    },
  },
});

export const image = style({
  marginInline: 'auto',
  maxWidth: 536,
  order: 1,
  width: '100%',

  '@media': {
    [queries.large]: {
      order: 'unset',
      gridColumn: 2,
      gridRow: 1,
    },
  },
});

export const marquee = style({
  backgroundColor: theme.colors.white,
  color: theme.colors.black,
  display: 'flex',
  fontSize: theme.fontSizes.medium,
  gridColumn: 'span 2',
  marginBottom: theme.spacing.large,
  paddingBlock: theme.spacing.medium,
  order: 2,
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  '@media': {
    [queries.large]: {
      order: 'unset',
      gridRow: 2,
    },
  },
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

export const videoDetails = style({
  border: `1px solid ${theme.colors.red}`,
  fontSize: theme.fontSizes.small,
  marginInline: 'auto',
  maxWidth: 350,
  paddingBlock: theme.spacing.small,
  paddingInline: theme.spacing.medium,
  textAlign: 'center',

  '@media': {
    [queries.large]: {
      maxWidth: '50%',
    },
  },
});

globalStyle(`${videoDetails} a`, {
  color: theme.colors.red,
});

export const arrowContainer = style({
  textAlign: 'center',
});

export const arrow = style({
  animation: `${bounceKeyframes} 2s ease infinite`,
  fontSize: theme.spacing.xxlarge,
  marginTop: 20,
  textAlign: 'center',
  willChange: 'transform',
});
