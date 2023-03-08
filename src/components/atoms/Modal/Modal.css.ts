import { style } from '@vanilla-extract/css';

export const dialog = style({
  border: 0,
  left: '50%',
  margin: 0,
  position: 'fixed',
  top: '50%',
  translate: '-50% -50%',
  zIndex: 999,
});
