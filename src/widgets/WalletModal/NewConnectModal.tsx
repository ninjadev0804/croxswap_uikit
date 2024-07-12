import React from "react";
import styled from "styled-components";
import { IoMdHelpCircleOutline } from 'react-icons/io'
import Text from "../../components/Text/Text";
import { Link } from "../../components/Link";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 16px;
  color: white;
`;

const NewConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect wallet" onDismiss={onDismiss} isNew>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
    <HelpLink
      href="https://docs.croxswap.com/guide/metamask-installation"
      external
    >
      <IoMdHelpCircleOutline fontSize='20px' />
      <Text bold color="NewConnectColor">Learn how to connect</Text>
    </HelpLink>
  </Modal>
);

export default NewConnectModal;
