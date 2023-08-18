import { style, styleVariants } from "@vanilla-extract/css";
import { queries, theme } from "../../../theme.css";

export const container = style({
  marginInline: "auto",
  paddingInline: theme.spacing.medium,
  width: "100%",

  "@media": {
    [queries.large]: {
      paddingInline: theme.spacing.large,
    },
  },
});

export const size = styleVariants({
  xsmall: {
    maxWidth: 456,
  },
  small: {
    maxWidth: 960,
  },
  medium: {
    maxWidth: 1024,
  },
  large: {
    maxWidth: 1200,
  },
});
