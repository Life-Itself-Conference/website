import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const modal = style({
  fontSize: theme.fontSizes.small,
});

export const header = style({
  alignItems: 'center',
  display: 'flex',
  fontSize: theme.fontSizes.xlarge,
  gap: '1ch',
  justifyContent: 'center',
  marginBottom: theme.spacing.large,
  textTransform: 'uppercase',
});

globalStyle(`${header} img`, {
  height: theme.fontSizes.xlarge,
});

export const form = style({
  display: 'grid',
  gap: theme.spacing.small,
});
