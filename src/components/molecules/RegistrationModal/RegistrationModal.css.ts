import { style } from "@vanilla-extract/css";
import { theme } from "@/styles/theme.css";

export const form = style({
  display: "grid",
  gap: theme.spacing.medium,
});
