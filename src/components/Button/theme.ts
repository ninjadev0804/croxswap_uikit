import { ButtonTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUCCESS, WARNING } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.primary,
    backgroundActive: lightColors.primaryDark,
    backgroundHover: lightColors.primaryBright,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SECONDARY]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: `1px solid ${lightColors.primary}`,
    borderColorHover: lightColors.primaryBright,
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TERTIARY]: {
    background: lightColors.tertiary,
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [DANGER]: {
    background: lightColors.danger,
    backgroundActive: lightColors.danger, // darkten 10%
    backgroundHover: lightColors.danger, // lighten 10%
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: lightColors.success, // 70% opacity
    backgroundHover: lightColors.success, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  
  [WARNING]: {
    background: lightColors.warning,
    backgroundActive: lightColors.warning, // 70% opacity
    backgroundHover: lightColors.warning, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.tertiary,
    color: darkColors.primary,
  },
  [TEXT]: {
    ...light.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUCCESS]: {
    ...light.success,
  },
  [WARNING]: {
    ...light.warning,
  },
};
