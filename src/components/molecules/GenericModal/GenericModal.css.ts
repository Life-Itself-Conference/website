import { style } from "@vanilla-extract/css";
import { breakpoints, theme } from "@/src/styles/theme.css";

export const container = style({
  overflow: "hidden",
  padding: 0,
});

export const grid = style({
  alignItems: "center",
  display: "grid",
  height: "100%",

  "@media": {
    [breakpoints.large]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gridTemplateRows: "minmax(0, 1fr)",
    },
  },
});

export const image = style({
  display: "block",
  height: "100%",
  objectFit: "cover",
  width: "100%",
});

export const content = style({
  maxHeight: "100%",
  overflow: "auto",
  padding: theme.spacing.large,
});
