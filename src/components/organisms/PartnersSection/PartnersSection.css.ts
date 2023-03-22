import { style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const list = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing.xlarge,
  listStyle: 'none',
  margin: 0,
  padding: 0,

  '@media': {
    [queries.large]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
});

export const image = style({
  height: 60,
  maxWidth: 250,
  objectFit: 'contain',
  '@media': {
    [queries.large]: {},
  },
});
