import { Colors } from "./types";

export const baseColors = {
  failure: "#fc6400",
  primary: "#fc6400",
  primaryBright: "#fc6400",
  primaryDark: "#fc6400",
  secondary: "#fc6400",
  success: "#fc6400",
  warning: "#fc6400",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#fc6400",
  tertiary: "#EFF4F5",
  text: "#fc6400",
  textDisabled: "#BDC2C4",
  textSubtle: "#fc6400",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#fc6400",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#fc6400",
  textDisabled: "#fc6400",
  textSubtle: "#fc6400",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};