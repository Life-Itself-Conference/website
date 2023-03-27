import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const button = style({
  alignItems: 'center',
  backgroundColor: 'none',
  border: 0,
  color: theme.colors.white,
  cursor: 'pointer',
  display: 'flex',
  height: theme.inputHeight,
  fontFamily: 'inherit',
  fontSize: theme.fontSizes.medium,
  fontWeight: 'bold',
  justifyContent: 'center',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
});

export const size = styleVariants({
  small: {
    fontSize: theme.fontSizes.small,
    paddingBlock: theme.spacing.xsmall,
    paddingInline: theme.spacing.medium,
  },
  medium: {
    fontSize: theme.fontSizes.medium,
    paddingBlock: theme.spacing.small,
    paddingInline: theme.spacing.large,
  },
});

export const variant = styleVariants({
  primary: {
    backgroundColor: theme.colors.red,
  },
  secondary: {
    backgroundColor: theme.colors.black,
    border: `1px solid ${theme.colors.white}`,
  },
});
