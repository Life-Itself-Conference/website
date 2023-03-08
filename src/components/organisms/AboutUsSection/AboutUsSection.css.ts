import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const content = style({
  fontSize: theme.fontSizes.medium,
  textAlign: 'left',
});
