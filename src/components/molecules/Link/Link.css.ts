import { style } from "@vanilla-extract/css";
import { theme } from "@/styles/theme.css";

export const buttonLink = style({
  background: "none",
  border: "none",
  color: theme.colors.red,
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "inherit",
  padding: 0,
  textTransform: "inherit",
});
