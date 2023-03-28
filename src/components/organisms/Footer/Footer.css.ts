import { globalStyle, style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const footer = style({
  fontSize: theme.fontSizes.small,
  paddingBlock: theme.spacing.xlarge,
  textAlign: 'center',
});

export const buttons = style({
  display: 'grid',
  gap: theme.spacing.small,
  gridTemplateColumns: '1fr 1fr',
});

export const ticketButton = style({
  gridColumn: 'span 2',
});

export const happy = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.large,
  justifyContent: 'center',
  marginBottom: theme.spacing.large,

  '@media': {
    [queries.large]: {
      flexDirection: 'row',
      transform: `translateX(-70px)`,
    },
  },
});

export const logo = style({
  height: 100,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
});

globalStyle(`${content} strong`, {
  color: theme.colors.red,
  fontSize: theme.fontSizes.xlarge,
  textTransform: 'uppercase',

  '@media': {
    [queries.large]: {
      fontSize: theme.fontSizes.xxlarge,
    },
  },
});
