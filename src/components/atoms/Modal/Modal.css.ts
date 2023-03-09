import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const dialog = style({
  backgroundColor: theme.colors.black,
  border: 0,
  color: theme.colors.white,
  left: '50%',
  margin: 0,
  position: 'fixed',
  top: '50%',
  translate: '-50% -50%',
  zIndex: 999,
});
