import { style } from "@vanilla-extract/css";
import { theme } from "@/styles/theme.css";

export const banner = style({
  alignItems: "center",
  backgroundColor: theme.colors.red,
  color: theme.colors.white,
  display: "flex",
  fontFamily: theme.fontFamilies.fancy,
  fontWeight: "bold",
  fontSize: theme.fontSizes.medium,
  gap: theme.spacing.medium,
  justifyContent: "center",
  paddingBlock: theme.spacing.medium,
  textTransform: "uppercase",
});

export const button = style({
  background: "none",
  border: "none",
  color: "inherit",
  cursor: "pointer",
  fontFamily: theme.fontFamilies.base,
  fontSize: theme.fontSizes.xsmall,
  fontWeight: "inherit",
  lineHeight: "inherit",
  padding: 0,
});
