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
  fontSize: theme.fontSizes.small,
  gridArea: 'content',
  overflowY: 'auto',
  padding: theme.spacing.large,
});

globalStyle(`${content} h2`, {
  color: theme.colors.red,
  fontSize: theme.fontSizes.large,
  marginBottom: theme.spacing.medium,
});

globalStyle(`${content}::-webkit-scrollbar`, {
  WebkitAppearance: 'none',
});

globalStyle(`${content}::-webkit-scrollbar:vertical`, {
  width: 11,
});

globalStyle(`${content}::-webkit-scrollbar:horizontal`, {
  height: 11,
});

globalStyle(`${content}::-webkit-scrollbar-thumb`, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  border: '2px solid #666',
  borderRadius: 8,
});

globalStyle(`${content}::-webkit-scrollbar-track`, {
  backgroundColor: '#333',
  borderRadius: 8,
});

export const bio = style({
  borderTop: `1px solid ${theme.colors.white}`,
  paddingTop: theme.spacing.medium,
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
