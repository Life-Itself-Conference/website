import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const dialog = style({
  backgroundColor: theme.colors.black,
  border: 0,
  color: theme.colors.white,
  left: '50%',
  margin: 0,
  padding: 0,
  position: 'fixed',
  top: '50%',
  translate: '-50% -50%',
  zIndex: 999,
});

globalStyle(`${dialog}::backdrop`, {
  backgroundColor: 'rgba(50, 50, 50, 0.9)',
});

export const header = style({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing.medium,
});
