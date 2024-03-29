import {
  globalStyle,
  keyframes,
  style,
  styleVariants,
} from "@vanilla-extract/css";
import { breakpoints, theme } from "@/src/styles/theme.css";

const animationDuration = "300ms";

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

globalStyle(`${overlay}[data-state='open']`, {
  animation: `${fadeIn} ${animationDuration} ease-out`,
});

globalStyle(`${overlay}[data-state='closed']`, {
  animation: `${fadeOut} ${animationDuration} ease-out`,
});

const baseDialog = style({
  backgroundColor: theme.colors.black,
  display: "flex",
  left: "50%",
  height: "100dvh",
  maxHeight: "100dvh",
  maxWidth: "100dvw",
  position: "fixed",
  top: "50%",
  translate: "-50% -50%",
  width: "100dvw",
  zIndex: 10001,

  "@media": {
    [breakpoints.medium]: {
      height: "auto",
      maxHeight: "calc(100vh - 4rem)",
      maxWidth: "calc(100vw - 4rem)",
      width: "auto",
    },
  },
});

globalStyle(`${baseDialog}[data-state='open']`, {
  animation: `${fadeIn} ${animationDuration} ease-out, ${scaleUp} ${animationDuration} ease-out`,
});

globalStyle(`${baseDialog}[data-state='closed']`, {
  animation: `${fadeOut} ${animationDuration} ease-out, ${scaleDown} ${animationDuration} ease-out`,
});

export const dialog = styleVariants({
  small: [
    baseDialog,
    {
      "@media": {
        [breakpoints.medium]: { width: 496 },
      },
    },
  ],
  medium: [
    baseDialog,
    {
      "@media": {
        [breakpoints.medium]: { width: 768 },
      },
    },
  ],
  large: [
    baseDialog,
    {
      "@media": {
        [breakpoints.medium]: { width: 1024 },
      },
    },
  ],
});

export const content = style({
  overflow: "auto",
  padding: theme.spacing.xlarge,
  width: "100%",
});

export const close = style({
  background: "rgba(0, 0, 0, 0.5)",
  border: "none",
  alignItems: "center",
  display: "flex",
  color: theme.colors.white,
  cursor: "pointer",
  fontSize: theme.fontSizes.large,
  height: theme.spacing.xlarge,
  justifyContent: "center",
  padding: 0,
  position: "absolute",
  right: 0,
  top: 0,
  width: theme.spacing.xlarge,
});
