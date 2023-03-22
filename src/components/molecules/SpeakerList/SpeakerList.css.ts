import { style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const list = style({
  display: 'grid',
  gap: theme.spacing.small,
  gridTemplateColumns: 'repeat(2, 1fr)',
  listStyle: 'none',
  margin: 0,
  padding: 0,

  '@media': {
    [queries.medium]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [queries.large]: {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
  },
});
