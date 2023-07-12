import { style } from '@vanilla-extract/css';

export const image = style({
  opacity: 0,
  transitionDuration: '150ms',
  transitionProperty: 'opacity',
  transitionTimingFunction: 'ease-in-out',
});

export const loaded = style({
  opacity: 1,
});
