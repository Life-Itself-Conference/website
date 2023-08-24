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
  columnGap: 40,
  justifyContent: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,
  rowGap: 60,

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
  height: "100%",
  maxHeight: 60,
  maxWidth: 200,
  objectFit: "contain",
  width: "100%",
});

export const button = style({
  alignSelf: "center",
});
