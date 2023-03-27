import { globalStyle, style } from '@vanilla-extract/css';
import { queries, theme } from '../../../theme.css';

export const modal = style({
  '@media': {
    [queries.large]: {
      height: 420,
    },
  },
});

export const grid = style({
  display: 'grid',
  gridTemplateAreas: "'header image' 'content content'",
  gridTemplateColumns: '1fr 120px',
  gridTemplateRows: 'auto 1fr',
  overflow: 'auto',
  textAlign: 'left',

  '@media': {
    [queries.large]: {
      gridTemplateAreas: "'header image' 'content image'",
      gridTemplateColumns: '2fr 240px',
      gridTemplateRows: 'auto 1fr',
    },
  },
});

export const header = style({
  justifyContent: 'center',
  backgroundColor: theme.colors.red,
  display: 'flex',
  flexDirection: 'column',
  gridArea: 'header',
  padding: theme.spacing.large,
});

export const content = style({
  gridArea: 'content',
  overflowY: 'auto',
  padding: theme.spacing.large,
});

export const image = style({
  gridArea: 'image',
  position: 'relative',
});

globalStyle(`${image} img`, {
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  width: '100%',
});
