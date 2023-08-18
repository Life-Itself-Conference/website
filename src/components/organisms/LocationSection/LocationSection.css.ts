import { globalStyle, style } from "@vanilla-extract/css";
import { queries, theme } from "../../../styles/theme.css";

export const container = style({
  padding: 0,
});

export const content = style({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  paddingInline: "0 !important",
  textAlign: "left",

  "@media": {
    [queries.large]: {
      flexDirection: "row",
      height: 600,
      justifyContent: "space-between",
      paddingBlock: theme.spacing.large,
      paddingInline: `${theme.spacing.large} !important`,
      position: "relative",
    },
  },
});

export const video = style({
  height: "100%",
  inset: 0,
  objectFit: "cover",
  position: "absolute",
  width: "100%",
  zIndex: -1,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  minHeight: 300,
  padding: theme.spacing.medium,
  position: "relative",
  textTransform: "uppercase",
  width: "100%",

  "@media": {
    [queries.large]: {
      padding: 0,
      position: "static",
    },
  },
});

globalStyle(`${header} h2`, {
  display: "flex",
  flexDirection: "column",
  fontSize: theme.fontSizes.xxxlarge,
  fontWeight: "bold",
  lineHeight: "1em",
  margin: 0,
  marginBottom: theme.spacing.small,
  maxWidth: 500,
});

globalStyle(`${header} h2 sub`, {
  fontSize: "0.5em",
  fontWeight: "normal",
  lineHeight: "1em",
});

export const aside = style({
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  display: "flex",
  flexDirection: "column",
  fontSize: theme.fontSizes.small,
  gap: theme.spacing.medium,
  padding: theme.spacing.large,

  "@media": {
    [queries.large]: {
      maxWidth: 700,
    },
  },
});

export const overview = style({});
globalStyle(`${overview} p`, {
  display: "inline-block",
  margin: 0,
});

export const footer = style({
  textAlign: "center",
});

export const buttons = style({
  display: "flex",
  gap: theme.spacing.small,
  justifyContent: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const address = style({
  bottom: theme.spacing.medium,
  fontSize: theme.fontSizes.xxsmall,
  margin: 0,
  position: "absolute",
  right: theme.spacing.medium,
  textAlign: "right",
  textTransform: "initial",

  "@media": {
    [queries.large]: {
      display: "none",
    },
  },
});

export const dates = style({
  fontWeight: "bold",
  display: "block",
  marginTop: theme.spacing.xsmall,
});
