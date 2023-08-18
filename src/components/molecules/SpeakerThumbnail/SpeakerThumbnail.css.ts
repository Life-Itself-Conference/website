import { globalStyle, style } from "@vanilla-extract/css";
import { queries, theme } from "../../../styles/theme.css";

const transitionDuration = "300ms";
const transitionTimingFunction = "ease-in-out";

export const container = style({
  alignItems: "center",
  aspectRatio: "16/19",
  backgroundColor: "#222",
  display: "flex",
  justifyContent: "center",
  overflow: "clip",
  position: "relative",

  ":before": {
    backgroundImage: "linear-gradient(transparent 70%, rgba(30, 30, 30, 0.6))",
    bottom: 0,
    content: "",
    height: "100%",
    inset: 0,
    position: "absolute",
    zIndex: 2,
  },
});

export const image = style({
  height: "100%",
  objectFit: "cover",
  width: "100%",
  zIndex: 1,
});

export const placeholderImage = style({
  width: 75,
});

export const content = style({
  backgroundColor: "transparent",
  bottom: "0",
  fontSize: theme.fontSizes.xsmall,
  flexDirection: "column",
  position: "absolute",
  textAlign: "left",
  translate: "0 100%",
  transitionDuration,
  transitionProperty: "translate",
  transitionTimingFunction,
  width: "100%",
  zIndex: 3,

  "@media": {
    [queries.medium]: {
      fontSize: theme.fontSizes.small,
    },
  },
});

export const name = style({
  display: "flex",
  paddingBottom: theme.spacing.xsmall,
  paddingInline: theme.spacing.xsmall,
  paddingTop: theme.spacing.small,
  position: "absolute",
  top: 0,
  transitionDuration,
  transitionProperty: "background-color",
  transitionTimingFunction,
  translate: "0 -100%",
  width: "100%",

  "@media": {
    [queries.medium]: {
      padding: theme.spacing.small,
    },
  },
});

export const details = style({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
  lineHeight: "1.1em",
  padding: theme.spacing.xsmall,
  paddingTop: 0,
  transitionDuration,
  transitionProperty: "background-color",
  transitionTimingFunction,

  "@media": {
    [queries.medium]: {
      padding: theme.spacing.small,
    },
  },
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const item = style({
  display: "flex",
  flexDirection: "column",
});

globalStyle(`${item} strong`, {
  fontSize: theme.fontSizes.xsmall,
});

export const button = style({
  alignSelf: "flex-end",
});

globalStyle(
  `${container}:hover ${content}, ${container}:focus-within ${content}`,
  {
    translate: 0,
  }
);

globalStyle(`${container}:hover ${name}, ${container}:focus-within ${name}`, {
  backgroundColor: theme.colors.red,
});

globalStyle(
  `${container}:hover ${details}, ${container}:focus-within ${details}`,
  {
    backgroundColor: theme.colors.red,
  }
);
