import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const section = style({
  marginBlock: theme.spacing.xlarge,
});

export const header = style({
  textAlign: 'center',
});

export const content = style({
  textAlign: 'center',
});
