import { globalStyle, style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';
import { button } from '../../atoms/Button/Button.css';

export const container = style({
  alignItems: 'center',
  display: 'flex',
  fontSize: theme.fontSizes.xlarge,
  height: '50vh',
  textAlign: 'center',
  '@media': {
    [queries.large]: {
      textAlign: 'left',
    },
  },
});

export const content = style({
  '@media': {
    [queries.large]: {
      maxWidth: 535,
    },
  },
});

export const meta = style({
  fontSize: theme.fontSizes.medium,
});

export const title = style({
  aspectRatio: '23 / 3',
  backgroundImage: `url(/life-itself.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  height: 42,
  marginBlock: theme.spacing.medium,
  marginInline: 'auto',
  '@media': {
    [queries.large]: {
      height: 60,
      marginInline: 'initial',
    },
  },
});

globalStyle(`${title} > span`, {
  fontSize: 0,
});

export const buttons = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.small,
  justifyContent: 'center',
  '@media': {
    [queries.large]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  },
});

globalStyle(`${buttons} ${button}`, {
  maxWidth: 350,
  width: '100%',
});
