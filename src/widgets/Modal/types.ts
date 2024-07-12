export interface ModalTheme {
  background: string;
  modalBridgeBackground: string;
}

export type Handler = () => void;

export interface InjectedProps {
  onDismiss?: Handler;
}
