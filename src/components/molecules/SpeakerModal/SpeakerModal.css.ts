import { globalStyle, style } from "@vanilla-extract/css";
import { breakpoints, theme } from "@/src/styles/theme.css";

export const container = style({
  display: "grid",
  gridTemplateAreas: `
  'header image'
  'content content'
  `,
  gridTemplateColumns: "4fr 1fr",
  gridTemplateRows: "auto 1fr",
  padding: 0,
  textAlign: "left",

  "@media": {
    [breakpoints.medium]: {
      gridTemplateAreas: `
      'header image'
      'content image'
      `,
      gridTemplateColumns: "2fr 1fr",
      height: 500,
    },
  },
});

export const header = style({
  backgroundColor: theme.colors.red,
  display: "flex",
  flexDirection: "column",
  gridArea: "header",
  justifyContent: "center",
  padding: theme.spacing.large,

  "@media": {
    [breakpoints.medium]: {
      borderRight: `${theme.spacing.xlarge} solid ${theme.colors.black}`,
      borderTop: `${theme.spacing.xlarge} solid ${theme.colors.black}`,
    },
  },
});

export const name = style({
  fontSize: theme.fontSizes.large,
  fontWeight: "bold",
  margin: 0,
  marginBottom: theme.spacing.small,
});

export const details = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.xsmall,
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const detail = style({
  display: "flex",
  flexDirection: "column",
});

globalStyle(`${detail} strong`, {
  fontSize: theme.fontSizes.small,
});

globalStyle(`${detail} span`, {
  fontSize: theme.fontSizes.medium,
});

export const content = style({
  fontSize: theme.fontSizes.medium,
  gridArea: "content",
  overflow: "auto",
  padding: theme.spacing.large,
});

export const image = style({
  gridArea: "image",
});

globalStyle(`${image} > img`, {
  aspectRatio: "1 / 1.25",
  objectFit: "cover",
  height: "100%",
  width: "100%",
});

export const topic = style({
  borderBottom: `1px solid ${theme.colors.white}`,
  color: theme.colors.red,
  fontFamily: theme.fontFamilies.fancy,
  fontWeight: 700,
  marginBottom: theme.spacing.large,
  paddingBottom: theme.spacing.large,
  textTransform: "uppercase",
});
