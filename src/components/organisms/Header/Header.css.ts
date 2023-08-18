import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { queries, theme } from "@/src/theme.css";
import { button } from "../../atoms/Button/Button.css";

export const container = style({
  alignItems: "center",
  backgroundColor: theme.colors.black,
  display: "flex",
  fontSize: theme.fontSizes.small,
  height: theme.headerHeight,
  justifyContent: "space-between",
  paddingLeft: theme.spacing.medium,
  position: "sticky",
  top: 0,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  zIndex: 999,

  "@media": {
    [queries.large]: {
      paddingInline: theme.spacing.large,
    },
  },
});

globalStyle(`${container} a:not(${button})`, {
  color: theme.colors.white,
});

export const logo = style({
  backgroundImage: "url(/logo.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  overflow: "hidden",
  height: 22,
  width: 160,
});

globalStyle(`${logo} > span`, {
  marginLeft: 1000,
});

export const hamburger = style({
  alignItems: "center",
  background: "none",
  border: "none",
  color: "inherit",
  cursor: "pointer",
  display: "flex",
  fontSize: 24,
  justifyContent: "center",
  padding: theme.spacing.small,

  "@media": {
    [queries.large]: {
      display: "none",
    },
  },
});

export const nav = style({
  backgroundColor: theme.colors.black,
  color: theme.colors.white,
  fontSize: theme.fontSizes.large,
  inset: 0,
  padding: theme.spacing.large,
  position: "fixed",
  top: theme.headerHeight,
  display: "none",

  "@media": {
    [queries.large]: {
      display: "block",
      fontSize: theme.fontSizes.small,
      inset: "unset",
      padding: 0,
      position: "initial",
    },
  },
});

export const open = style({
  display: "block",
});

export const links = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.large,
  listStyle: "none",
  margin: 0,
  padding: 0,

  "@media": {
    [queries.large]: {
      flexDirection: "row",
    },
  },
});

export const toggle = style({
  background: "none",
  border: "none",
  color: "inherit",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  padding: 0,
  textTransform: "inherit",
});

export const popover = style({
  left: 0,
  position: "absolute",
  textAlign: "left",
  top: "100%",
  width: "100%",
});

globalStyle(`${popover} ul`, {
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const buttons = style({
  display: "flex",
  gap: theme.spacing.small,
});
