import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const list = style({
  alignItems: 'center',
  columnGap: theme.spacing.large,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none',
  rowGap: theme.spacing.xlarge,
});

export const image = style({
  maxHeight: 60,
});
