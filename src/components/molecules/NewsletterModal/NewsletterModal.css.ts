import { style } from "@vanilla-extract/css";
import { theme } from "@/src/styles/theme.css";

export const container = style({ textAlign: "left" });

export const form = style({
  display: "grid",
  gap: theme.spacing.medium,
});

export const message = style({
  color: theme.colors.red,
});
