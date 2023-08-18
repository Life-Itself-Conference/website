import { globalStyle, style } from "@vanilla-extract/css";
import { queries, theme } from "../../../styles/theme.css";

export const content = style({
  fontSize: theme.fontSizes.medium,
  textAlign: "left",
});

export const image = style({
  display: "block",
  marginBlock: theme.spacing.large,
  marginInline: "auto",
  maxWidth: "100%",
});

export const bios = style({
  display: "grid",
  gap: theme.spacing.large,
  "@media": {
    [queries.large]: {
      gridTemplateColumns: "1fr 1fr",
    },
  },
});

globalStyle(`${bios} > div:first-child`, {
  textAlign: "right",
});

globalStyle(`${bios} h3`, {
  margin: 0,
});

export const title = style({
  alignItems: "center",
  display: "inline-flex",
  gap: theme.spacing.small,
});
globalStyle(`${title} img`, {
  display: "inline-flex",
  height: "1em",
});

export const bio = style({
  textAlign: "justify",
});
