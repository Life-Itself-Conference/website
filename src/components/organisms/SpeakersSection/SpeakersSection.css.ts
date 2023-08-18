import { style } from "@vanilla-extract/css";
import { queries, theme } from "@/src/theme.css";

export const list = style({
  display: "grid",
  gap: theme.spacing.medium,
  gridTemplateColumns: "repeat(3, 1fr)",
  listStyle: "none",
  margin: 0,
  padding: 0,

  "@media": {
    [queries.large]: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  },
});

export const thumbnail = style({});
