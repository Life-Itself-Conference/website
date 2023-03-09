import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

const inputHeight = 48;
const inputFontSize = 16;
const inputPadding = (inputHeight - inputFontSize) / 2;

export const container = style({
  position: 'relative',
});

export const input = style({
  backgroundColor: theme.colors.white,
  border: 0,
  color: theme.colors.black,
  fontFamily: 'inherit',
  fontSize: inputFontSize,
  height: inputHeight,
  paddingInline: inputPadding / 1.5,
  paddingTop: inputPadding * 1.5,
  paddingBottom: inputPadding / 1.5,
  width: '100%',
});

export const label = style({
  color: theme.colors.black,
  fontFamily: 'inherit',
  fontSize: 16,
  left: inputPadding / 1.5,
  lineHeight: '1em',
  position: 'absolute',
  pointerEvents: 'none',
  top: inputPadding,
  transitionDuration: '150ms',
  transitionProperty: 'color, font-size, top',
  transitionTimingFunction: 'ease-in-out',
});

globalStyle(
  `${input}:not(:placeholder-shown) ~ ${label}, ${input}:focus ~ ${label}`,
  {
    fontSize: theme.fontSizes.xsmall,
    fontWeight: 'bold',
    top: inputPadding / 2,
    textTransform: 'uppercase',
  },
);
