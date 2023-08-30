import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "@/src/styles/theme.css";

const inputHeight = 48;
const inputFontSize = 16;
const inputPadding = (inputHeight - 16) / 2;

export const container = style({ position: "relative" });

export const input = style({
  backgroundColor: theme.colors.white,
  border: 0,
  borderRadius: 0,
  fontFamily: "inherit",
  fontSize: inputFontSize,
  height: inputHeight,
  lineHeight: "1em",
  paddingBottom: inputPadding / 1.25,
  paddingInline: inputPadding / 1.25,
  paddingTop: inputPadding * 1.25,
  width: "100%",
});

globalStyle(`${input}[disabled]`, {
  color: "#999",
});

export const label = style({
  color: theme.colors.black,
  fontFamily: "inherit",
  fontSize: inputFontSize,
  left: inputPadding / 1.25,
  lineHeight: "1em",
  position: "absolute",
  top: (inputHeight - inputFontSize) / 2,
  transitionDuration: "300ms",
  transitionProperty: "font-size, top",
  transitionTimingFunction: "ease-in-out",
});

globalStyle(`${input}[disabled] ~ ${label}`, {
  color: "#999",
});

globalStyle(
  `${input}:focus ~ ${label}, ${input}:not(:placeholder-shown) ~ ${label}`,
  {
    fontSize: 10,
    top: 8,
  }
);

export const error = style({
  bottom: theme.spacing.small,
  color: theme.colors.red,
  fontSize: theme.fontSizes.xsmall,
  position: "absolute",
  right: theme.spacing.small,
});

globalStyle(`${error} ~ ${input}`, {
  border: `2px solid ${theme.colors.red}`,
});

globalStyle(`${error} ~ ${label}`, {
  color: theme.colors.red,
});
