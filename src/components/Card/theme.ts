import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "linear-gradient(to right top, #ffffff, #fdfbfe, #fef7fa, #fff3f3, #ffefeb, #ffefeb, #ffefeb, #ffefeb, #fff3f3, #fef7fa, #fdfbfe, #ffffff);",
  cardBody: "radial-gradient(at center, #ffeddd, #ffffff)",
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "radial-gradient(at center,#09215a,#0e1526)",
  cardBody: "radial-gradient(at center, #0f1c3c, #121827)",
};
