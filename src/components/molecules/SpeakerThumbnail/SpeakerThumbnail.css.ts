import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

const transitionDuration = '300ms';
const transitionTimingFunction = 'ease-in-out';

export const container = style({
  alignItems: 'center',
  aspectRatio: '16/19',
  backgroundColor: '#222',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'clip',
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
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.small,
  lineHeight: '1.1em',
  padding: theme.spacing.small,
  paddingTop: 0,
  transitionDuration,
  transitionProperty: 'background-color',
  transitionTimingFunction,
});

export const button = style({
  alignSelf: 'flex-end',
});

globalStyle(
  `${container}:hover ${content}, ${container}:focus-within ${content}`,
  {
    translate: 0,
  },
);

globalStyle(`${container}:hover ${name}, ${container}:focus-within ${name}`, {
  backgroundColor: theme.colors.red,
});

globalStyle(
  `${container}:hover ${details}, ${container}:focus-within ${details}`,
  {
    backgroundColor: theme.colors.red,
  },
);
