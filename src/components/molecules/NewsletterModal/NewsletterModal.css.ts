import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.small,
});
