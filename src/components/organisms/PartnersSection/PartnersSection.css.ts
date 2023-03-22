import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const list = style({
  alignItems: 'center',
  columnGap: theme.spacing.xlarge,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none',
  rowGap: theme.spacing.xlarge,
});

export const image = style({
  maxHeight: 60,
  maxWidth: 300,
  objectFit: 'contain',
});
