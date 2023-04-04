import { style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const list = style({
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  margin: 0,
  marginInline: `calc(${theme.spacing.xsmall} * -1)`,
  padding: 0,
});

export const item = style({
  border: `${theme.spacing.xsmall} solid ${theme.colors.black}`,
  width: '50%',

  '@media': {
    [queries.medium]: {
      width: 'calc(100% / 3)',
    },
    [queries.large]: {
      width: '20%',
    },
  },
});

export const last = style({
  alignItems: 'center',
  aspectRatio: '2 / 1',
  backgroundColor: '#222',
  backgroundImage: 'url(/more-to-come.png)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 140,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: theme.spacing.medium,
  minHeight: 150,
  justifyContent: 'center',
  padding: theme.spacing.small,

  '@media': {
    [queries.medium]: {
      aspectRatio: '3 / 1',
    },
    [queries.medium]: {
      aspectRatio: '5 / 1',
    },
  },
});
