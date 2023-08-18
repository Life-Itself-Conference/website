import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("*, *:before, *:after", {
  boxSizing: "border-box",
});

export const html = style({
  scrollBehavior: "smooth !important" as "smooth",
  scrollPaddingTop: theme.headerHeight,
});

export const body = style({
  backgroundColor: theme.colors.black,
  color: theme.colors.white,
  fontFamily: theme.fontFamilies.base,
  fontSize: theme.fontSizes.large,
  margin: 0,
  textAlign: "center",
});

globalStyle(`${body}.modal-open`, {
  overflow: "hidden",
});

globalStyle(`${body}.preview:before`, {
  backgroundColor: "yellow",
  borderRadius: theme.spacing.xsmall,
  bottom: theme.spacing.medium,
  color: "black",
  content: "Preview Mode",
  fontSize: theme.fontSizes.xsmall,
  fontWeight: "bold",
  padding: theme.spacing.small,
  pointerEvents: "none",
  position: "fixed",
  right: theme.spacing.medium,
  zIndex: 999,
});

globalStyle(`${body}.preview--loading:after`, {
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  backdropFilter: "blur(4px)",
  content: "Loading Preview Content...",
  display: "flex",
  inset: 0,
  justifyContent: "center",
  position: "fixed",
  zIndex: 1000,
});

globalStyle("a", {
  color: theme.colors.red,
  textDecoration: "none",
});

globalStyle("p", {
  margin: `0 0 ${theme.spacing.medium}`,
});

globalStyle("hr", {
  backgroundColor: theme.colors.red,
  border: "none",
  marginBlock: theme.spacing.xlarge,
  height: 1,
});
