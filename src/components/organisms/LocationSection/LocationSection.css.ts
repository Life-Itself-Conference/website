import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, theme } from "../../../styles/theme.css";

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
    [breakpoints.large]: {
      flexDirection: "row",
      gap: theme.spacing.large,
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
  minHeight: 400,
  padding: theme.spacing.large,
  position: "relative",
  textTransform: "uppercase",
  width: "100%",

  "@media": {
    [breakpoints.large]: {
      padding: 0,
      position: "static",
    },
  },
});

export const title = style({
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.fontFamilies.fancy,
  fontSize: theme.fontSizes.xxxlarge,
  fontWeight: 800,
  lineHeight: "1em",
  margin: 0,
  marginBottom: theme.spacing.small,
  maxWidth: 500,
});

export const label = style({
  fontSize: "0.5em",
  fontWeight: "normal",
  lineHeight: "1em",
});

export const location = style({
  fontFamily: theme.fontFamilies.fancy,
  fontWeight: "bold",
  fontSize: theme.fontSizes.small,
});

export const aside = style({
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  display: "flex",
  flexDirection: "column",
  fontSize: theme.fontSizes.small,
  gap: theme.spacing.medium,
  padding: theme.spacing.large,

  "@media": {
    [breakpoints.large]: {
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

export const buttons = styleVariants({
  mobile: {
    display: "grid",
    gap: theme.spacing.small,
    gridTemplateColumns: "1fr 1fr",

    "@media": {
      [breakpoints.large]: {
        display: "none",
      },
    },
  },
  desktop: {
    display: "none",
    gap: theme.spacing.small,
    justifyContent: "center",

    "@media": {
      [breakpoints.large]: {
        display: "flex",
      },
    },
  },
});

export const button = style({
  width: "100%",
});

export const registrationButton = style({
  gridColumn: "span 2",
  "@media": {
    [breakpoints.large]: {
      gridColumn: "unset",
    },
  },
});

export const address = style({
  bottom: theme.spacing.large,
  fontSize: theme.fontSizes.xxsmall,
  margin: 0,
  position: "absolute",
  right: theme.spacing.large,
  textAlign: "right",
  textTransform: "initial",

  "@media": {
    [breakpoints.large]: {
      display: "none",
    },
  },
});

export const desktopAddress = style({
  display: "none",

  "@media": {
    [breakpoints.large]: {
      display: "initial",
    },
  },
});

export const dates = style({
  fontWeight: "bold",
  display: "block",
  marginTop: theme.spacing.xsmall,
});
