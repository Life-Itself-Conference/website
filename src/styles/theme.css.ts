import { createGlobalTheme } from "@vanilla-extract/css";

export const breakpoints = {
  // Small devices (landscape phones, 576px and up)
  small: "(min-width: 576px)",

  // Medium devices (tablets, 768px and up)
  medium: "(min-width: 768px)",

  // Large devices (desktops, 992px and up)
  large: "(min-width: 992px)",

  // X-Large devices (large desktops, 1200px and up)
  xlarge: "(min-width: 1200px)",

  // XX-Large devices (larger desktops, 1400px and up)
  xxlarge: "(min-width: 1400px)",
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
    xlarge: "32px",
    xxlarge: "48px",
    xxxlarge: "96px",
  },
  headerHeight: "72px",
  inputHeight: "36px",
});
