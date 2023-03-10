import { style } from '@vanilla-extract/css';
import { theme } from '../../../theme.css';

export const grid = style({
  display: 'grid',
  columnGap: theme.spacing.large,
  gridTemplateAreas: "'header image' 'content image'",
  gridTemplateColumns: '2fr 1fr',
  gridTemplateRows: 'auto 1fr',
  overflow: 'auto',
  textAlign: 'left',
});

export const header = style({
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
});
