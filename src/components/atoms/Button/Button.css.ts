import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "@/src/styles/theme.css";

export const button = style({
  alignItems: "center",
  background: "none",
  border: "1px solid transparent",
  color: "inherit",
  cursor: "pointer",
  display: "inline-flex",
  fontWeight: "bold",
  justifyContent: "center",
  lineHeight: "1.5em",
  textAlign: "center",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
});

export const size = styleVariants({
  xsmall: {
    fontSize: theme.fontSizes.xsmall,
    paddingBlock: 0,
    paddingInline: theme.spacing.xsmall,
  },
  small: {
    fontSize: theme.fontSizes.small,
    paddingBlock: theme.spacing.xsmall,
    paddingInline: theme.spacing.medium,
  },
  medium: {
    fontSize: theme.fontSizes.medium,
    paddingBlock: theme.spacing.xsmall,
    paddingInline: theme.spacing.medium,
  },
});

export const variant = styleVariants({
  primary: {
    backgroundColor: theme.colors.red,
    color: theme.colors.white,
  },
  secondary: {
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.white,
    color: theme.colors.white,
  },
});
