import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import NewAccountModal from "./NewAccountModal";
import NewConnectModal from './NewConnectModal';
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
  onPresentNewAccountModal: () => void;
  onPresentNewConnectModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} />);
  const [onPresentNewAccountModal] = useModal(<NewAccountModal account={account || ""} logout={logout} connectModal={onPresentConnectModal} />);
  const [onPresentNewConnectModal] = useModal(<NewConnectModal login={login} />)
  return { onPresentConnectModal, onPresentAccountModal, onPresentNewAccountModal, onPresentNewConnectModal };
};

export default useWalletModal;
