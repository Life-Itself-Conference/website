import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const list = style({
  display: 'grid',
  gap: theme.spacing.small,
  gridTemplateColumns: 'repeat(3, 1fr)',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  '@media': {
    'screen and (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
  },
});
