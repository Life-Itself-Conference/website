import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

const transitionDuration = '300ms';
const transitionTimingFunction = 'ease-in-out';

export const container = style({
  alignItems: 'center',
  aspectRatio: '16/19',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  ':before': {
    backgroundImage: 'linear-gradient(transparent 70%, rgba(30, 30, 30, 0.6))',
    bottom: 0,
    content: '',
    height: '100%',
    inset: 0,
    position: 'absolute',
  },
});

export const image = style({
  height: '100%',
  objectFit: 'cover',
  width: '100%',
});

export const placeholderImage = style({
  height: 75,
  width: 75,
});

export const content = style({
  backgroundColor: 'transparent',
  bottom: '0',
  fontSize: theme.fontSizes.small,
  flexDirection: 'column',
  position: 'absolute',
  textAlign: 'left',
  translate: '0 100%',
  transitionDuration,
  transitionProperty: 'translate',
  transitionTimingFunction,
  width: '100%',
});

export const name = style({
  display: 'flex',
  padding: theme.spacing.small,
  position: 'absolute',
  top: 0,
  transitionDuration,
  transitionProperty: 'background-color',
  transitionTimingFunction,
  translate: '0 -100%',
  width: '100%',
});

export const details = style({
  backgroundColor: 'transparent',
  padding: theme.spacing.small,
  paddingTop: 0,
  transitionDuration,
  transitionProperty: 'background-color',
  transitionTimingFunction,
});

globalStyle(`${container}:hover ${content}`, {
  translate: 0,
});

globalStyle(`${container}:hover ${name}`, {
  backgroundColor: theme.colors.red,
});

globalStyle(`${container}:hover ${details}`, {
  backgroundColor: theme.colors.red,
});
