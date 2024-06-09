import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { theme } from "@/src/styles/theme.css";

export const button = style({
  alignItems: "center",
  background: "none",
  border: "1px solid transparent",
  color: "inherit",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: theme.fontFamilies.base,
  fontWeight: "bold",
  justifyContent: "center",
  lineHeight: "1.5em",
  textAlign: "center",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
});

globalStyle(`${button}[disabled]`, {
  cursor: "default",
  opacity: 0.5,
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
    textShadow: "0px 0px 3px rgba(0, 0, 0, 0.4)",
  },
  secondary: {
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.white,
    color: theme.colors.white,
  },
});
