import { style } from "@vanilla-extract/css";
import { breakpoints, theme } from "../../../styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.xlarge,
});

export const list = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: 60,
  justifyContent: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,

  "@media": {
    [breakpoints.large]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
});

export const link = style({
  display: "inline-flex",
});

export const image = style({
  maxHeight: 60,
  maxWidth: 280,
  objectFit: "contain",
});

export const button = style({
  alignSelf: "center",
});
