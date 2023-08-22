import { style } from "@vanilla-extract/css";
import { queries, theme } from "@/src/styles/theme.css";

export const modal = style({
  height: "100%",
  overflow: "hidden",
  padding: 0,

  "@media": {
    [queries.medium]: {
      height: 500,
    },
  },
});

export const grid = style({
  alignItems: "center",
  display: "grid",
  height: "100%",

  "@media": {
    [queries.large]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gridTemplateRows: "minmax(0, 1fr)",
    },
  },
});

export const image = style({
  height: "100%",
  objectFit: "cover",
  width: "100%",
});

export const content = style({
  maxHeight: "100%",
  overflow: "auto",
  padding: theme.spacing.large,
});
