import React from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import { ViewonScan, SwitchButtonIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";
import { Link } from "../..";

const SwitchButton = styled.button`
  border: none;
  background-color: #0177FB;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  font-family: Poppins !important;
  padding: 8px 16px;
`;

const DisconnectButton = styled.button`
  border: none;
  background-color: #3B3C4E;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  font-family: Poppins !important;
  padding: 8px 16px;
`;

interface Props {
  connectModal: () => void;
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const BridgeAccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null, connectModal }) => (
  <Modal title="Account" onDismiss={onDismiss}>
    <Flex mb="30px" justifyContent="space-between" alignItems="center" >
        <Text
            fontSize="20px"
            bold
            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",  width: '100%' }}
        >
            {account.slice(0, 6)}...{account.slice(-4)}
        </Text>
        <Link external small href={`https://bscscan.com/address/${account}`} mr="16px">
            <ViewonScan color="white" onClick={onDismiss} />
        </Link>
        <CopyToClipboard title="Account" toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="space-between">
      <SwitchButton
        onClick={() => {
            onDismiss();
            connectModal();
        }}
      >
        <SwitchButtonIcon color="white" />
        <Text color="white" fontSize="14px" mt="2px" ml="8px" >Switch Wallet</Text>
      </SwitchButton>
      <DisconnectButton
        onClick={() => {
            logout();
            window.localStorage.removeItem(localStorageKey);
            onDismiss();
            window.location.reload();
        }}
      >
        <Text color="white" fontSize="14px" mt="2px" ml="8px" >Disconnect Wallet</Text>
      </DisconnectButton>
    </Flex>
    <Flex justifyContent="space-between" mt="40px" mb="300px">
        <Text fontSize="14px" >Recent Transaction</Text>
        <Text fontSize="14px" color="#0177FB" >Clear All</Text>
    </Flex>
  </Modal>
);

export default BridgeAccountModal;
