import { darkColors, lightColors } from "../../theme/colors";
import { ModalTheme } from "./types";

export const light: ModalTheme = {
  background: lightColors.card,
  modalBridgeBackground: lightColors.modalBridgeBackground,
};

export const dark: ModalTheme = {
  background: darkColors.card,
  modalBridgeBackground: darkColors.modalBridgeBackground,
};
