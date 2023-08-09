import { style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const container = style({
  alignItems: 'flex-start',
  display: 'flex',
  minHeight: `calc(100vh - ${theme.headerHeight})`,
  textAlign: 'center',

  '@media': {
    [queries.large]: {
      paddingTop: '18vh',
      textAlign: 'left',
    },
  },
});
