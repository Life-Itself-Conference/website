import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, theme } from "@/src/styles/theme.css";

const baseTitle = style({
  fontSize: theme.fontSizes.xlarge,
  margin: 0,
  marginBottom: theme.spacing.xxlarge,
  position: "relative",
  textAlign: "center",
  textTransform: "uppercase",
});

export const title = styleVariants({
  medium: [
    baseTitle,
    {
      "@media": {
        [breakpoints.large]: {
          fontSize: theme.fontSizes.xxlarge,
        },
      },
    },
  ],
  large: [
    baseTitle,
    {
      "@media": {
        [breakpoints.large]: {
          fontSize: theme.fontSizes.xxxlarge,
        },
      },
    },
  ],
});

globalStyle(`${baseTitle} > span`, {
  backgroundColor: theme.colors.black,
  position: "relative",
  paddingInline: theme.spacing.large,
});

globalStyle(`${baseTitle}:before`, {
  backgroundColor: theme.colors.red,
  content: "",
  height: 1,
  left: 0,
  position: "absolute",
  right: 0,
  top: "50%",
  translate: "0 -50%",
});

export const content = style({
  marginBottom: theme.spacing.xxlarge,
  marginTop: theme.spacing.large,
});
