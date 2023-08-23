import { style } from "@vanilla-extract/css";
import { breakpoints, theme } from "@/src/styles/theme.css";

export const list = style({
  display: "grid",
  gap: theme.spacing.medium,
  gridTemplateColumns: "repeat(2, 1fr)",
  listStyle: "none",
  margin: 0,
  padding: 0,

  "@media": {
    [breakpoints.medium]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [breakpoints.large]: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  },
});

export const thumbnail = style({});
