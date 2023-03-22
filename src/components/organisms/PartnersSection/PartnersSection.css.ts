import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const list = style({
  alignItems: 'center',
  columnGap: theme.spacing.xlarge,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none',
  rowGap: theme.spacing.xxlarge,
});

export const image = style({
  height: 40,
});
