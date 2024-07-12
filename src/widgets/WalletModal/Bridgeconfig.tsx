import Metamask from "./icons/MetamaskBridge";
import WalletConnect from "./icons/WalletConnectBridge";
import BinanceChain from "./icons/BinanceChainBridge";
import { Config } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: "bsc",
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
