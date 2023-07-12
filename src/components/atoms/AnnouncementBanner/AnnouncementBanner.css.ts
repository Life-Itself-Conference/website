import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const banner = style({
  backgroundColor: theme.colors.red,
  color: theme.colors.white,
  padding: theme.spacing.medium,
});

export const container = style({
  alignItems: 'center',
  display: 'flex',
  gap: theme.spacing.medium,
  justifyContent: 'center',
});

export const cta = style({
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: 'inherit',
  fontSize: theme.fontSizes.small,
  gap: theme.spacing.xsmall,
});
