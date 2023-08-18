import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { theme } from "@/src/theme.css";

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const scaleUp = keyframes({
  from: {
    scale: 0.8,
  },
  to: {
    scale: 1,
  },
});

const scaleDown = keyframes({
  from: {
    scale: 1,
  },
  to: {
    scale: 0.8,
  },
});

export const overlay = style({
  backgroundColor: "rgba(50, 50, 50, 0.9)",
  inset: 0,
  position: "fixed",
  zIndex: 10000,
});

export const content = style({
  backgroundColor: theme.colors.black,
  color: theme.colors.white,
  left: "50%",
  maxHeight: "100vh",
  maxWidth: "100vw",
  position: "fixed",
  top: "50%",
  translate: "-50% -50%",
  zIndex: 10001,
});

globalStyle(`${overlay}[data-state='open']`, {
  animation: `${fadeIn} 300ms ease-out`,
});

globalStyle(`${content}[data-state='open']`, {
  animation: `${fadeIn} 300ms ease-out, ${scaleUp} 300ms ease-out`,
});

globalStyle(`${overlay}[data-state='closed']`, {
  animation: `${fadeOut} 300ms ease-out`,
});

globalStyle(`${content}[data-state='closed']`, {
  animation: `${fadeOut} 300ms ease-out, ${scaleDown} 300ms ease-out`,
});

export const close = style({
  alignItems: "center",
  backgroundColor: theme.colors.black,
  border: "none",
  color: theme.colors.white,
  cursor: "pointer",
  display: "flex",
  height: theme.spacing.large,
  justifyContent: "center",
  position: "absolute",
  right: theme.spacing.xsmall,
  top: theme.spacing.xsmall,
  width: theme.spacing.large,
});
