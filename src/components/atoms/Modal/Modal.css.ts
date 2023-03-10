import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const dialog = style({
  backgroundColor: theme.colors.black,
  border: 0,
  color: theme.colors.white,
  gridTemplateRows: 'auto 1fr',
  left: '50%',
  overflow: 'hidden',
  margin: 0,
  maxHeight: 420,
  padding: 0,
  position: 'fixed',
  top: '50%',
  translate: '-50% -50%',
  zIndex: 999,
});

globalStyle(`${dialog}[open]`, {
  display: 'grid',
});

globalStyle(`${dialog}::backdrop`, {
  backgroundColor: 'rgba(50, 50, 50, 0.9)',
  pointerEvents: 'none',
});

export const header = style({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing.medium,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
});
