import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const list = style({
  display: 'grid',
  gap: theme.spacing.large,
  gridTemplateColumns: 'repeat(5, 1fr)',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});
