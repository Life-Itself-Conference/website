import { style } from "@vanilla-extract/css";
import { breakpoints, theme } from "@/src/styles/theme.css";

export const content = style({
  marginBottom: theme.spacing.xlarge,
});

export const list = style({
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  margin: 0,
  marginInline: `calc(${theme.spacing.xsmall} * -1)`,
  padding: 0,
});

export const item = style({
  borderStyle: "solid",
  borderColor: "transparent",
  borderWidth: theme.spacing.xsmall,
  width: "50%",

  "@media": {
    [breakpoints.medium]: {
      width: "calc(100% / 3)",
    },
    [breakpoints.large]: {
      width: "20%",
    },
  },
});

export const last = style({
  aspectRatio: "2 / 1",
  flexGrow: 1,
  minHeight: 150,

  "@media": {
    [breakpoints.medium]: {
      aspectRatio: "3 / 1",
    },
    [breakpoints.medium]: {
      aspectRatio: "5 / 1",
    },
  },
});

export const moreSpeakers = style({
  alignItems: "center",
  backgroundColor: "#222",
  backgroundImage: "url(/more-to-come.png)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: 140,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
  height: "100%",
  justifyContent: "center",
  padding: theme.spacing.small,
});

export const button = style({
  whiteSpace: "initial",
});
