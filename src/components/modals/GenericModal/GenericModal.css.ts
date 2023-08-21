import { style } from "@vanilla-extract/css";
import { queries, theme } from "@/src/styles/theme.css";

export const grid = style({
  // display: "grid",
  // "@media": {
  //   [queries.large]: {
  //     gridTemplateColumns: "1fr 1fr",
  //   },
  // },
});

export const content = style({
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  // padding: theme.spacing.large,
});
