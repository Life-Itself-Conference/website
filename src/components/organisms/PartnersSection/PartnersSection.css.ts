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
  gap: 40,
  justifyContent: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,

  "@media": {
    [breakpoints.medium]: {
      flexDirection: "row",
      flexWrap: "wrap",
      rowGap: 50,
    },
  },
});

export const link = style({
  display: "inline-flex",
});

export const image = style({
  height: 80,
  maxWidth: 250,
  objectFit: "contain",
  width: "100%",

  "@media": {
    [breakpoints.medium]: {
      height: "100%",
      maxHeight: 60,
      maxWidth: 200,
    },
  },
});

export const button = style({
  alignSelf: "center",
});
