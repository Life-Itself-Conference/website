import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const content = style({
  fontSize: theme.fontSizes.medium,
  textAlign: 'left',
});

export const image = style({
  display: 'block',
  marginBlock: theme.spacing.large,
  marginInline: 'auto',
});

export const bios = style({
  display: 'grid',
  gap: theme.spacing.large,
  gridTemplateColumns: '1fr 1fr',
});

export const bio = style({
  textAlign: 'justify',
});
