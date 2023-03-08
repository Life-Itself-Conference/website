import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const container = style({
  marginInline: 'auto',
  paddingInline: theme.spacing.large,
  width: '100%',
});

export const size = styleVariants({
  small: {
    maxWidth: 768,
  },
  medium: {
    maxWidth: 1024,
  },
  large: {
    maxWidth: 1200,
  },
});
