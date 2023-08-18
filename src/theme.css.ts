import { createGlobalTheme } from "@vanilla-extract/css";

export const queries = {
  medium: "screen and (min-width: 768px)",
  large: "screen and (min-width: 1080px)",
};

export const theme = createGlobalTheme(":root", {
  colors: {
    black: "#000",
    red: "#ff3254",
    white: "#fff",
  },
  fontFamilies: {
    base: "var(--font-noto)",
    fancy: "var(--font-jost)",
  },
  fontSizes: {
    xxsmall: "10px",
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "24px",
    xxlarge: "36px",
    xxxlarge: "48px",
    xxxxlarge: "60px",
  },
  spacing: {
    xsmall: "4px",
    small: "8px",
    medium: "12px",
    large: "24px",
    xlarge: "48px",
    xxlarge: "96px",
  },
  headerHeight: "72px",
  inputHeight: "36px",
});
