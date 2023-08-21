import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/theme.css";

export const separator = style({
  color: theme.colors.red,
});

export const eyebrow = style({
  color: theme.colors.red,
  fontFamily: theme.fontFamilies.fancy,
  fontSize: theme.fontSizes.medium,
  fontWeight: "bold",
  margin: 0,
  textTransform: "uppercase",
});
