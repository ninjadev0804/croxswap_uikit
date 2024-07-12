import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.card,
  topMenu: lightColors.blue,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.card,
  hover: "#473d5d",
  topMenu: darkColors.blue,
};
