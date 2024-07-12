import { Colors } from "./types";

export const baseColors = {
  danger: "#ec250d",
  primary: "#2d74c4",
  primaryBright: "#2d74c4",
  primaryDark: "#2d74c4",
  secondary: "#ffffff",
  success: "#31D0AA",
  warning: "#ff7351",
  blue: "#3521C3",
  brightBlue: "rgba(50, 85, 219, 0.72)",
  toggle: "rgba(50, 85, 219, 0.4)",
  white: "#FFFFFF",
  black: "#000000",
  grey: "#292525",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  closeIcon: "#000000",
  backgroundDisabled: "#b9b9b9",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#2B2A29",
  modalBridgeBackground: "#FFFFFF",
  textDisabled: "#5B5B5B",
  textSubtle: "#c9c4d4",
  NewConnectColor: "#000",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  closeIcon: "#FFFFFF",
  background: "#343135",
  backgroundDisabled: "#3B3C4E",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  modalBridgeBackground: "#23242F",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  NewConnectColor: "#fff",
  borderColor: "#253253",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
