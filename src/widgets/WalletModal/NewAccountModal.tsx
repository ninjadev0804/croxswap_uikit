import React from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import { ViewonScan } from "../../components/Svg";
import { IoIosSwitch } from 'react-icons/io'
import { AiOutlineDisconnect } from 'react-icons/ai'
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";
import { Link } from "../..";

interface Props {
  connectModal: () => void;
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}


const SwitchButton = styled.button`
  border: none;
  background-color: #2d74c4;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  font-family: Poppins !important;
  padding: 10px 16px;
  margin-bottom: 5px;
  margin-right: 5px;
  cursor: pointer;
  width: -webkit-fill-available;
`;

const DisconnectButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundDisabled};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  font-family: Poppins !important;
  padding: 10px 16px;
  margin-bottom: 5px;
  margin-left: 5px;
  cursor: pointer;
  width: -webkit-fill-available;
`;

const NewAccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null, connectModal }) => (
  <Modal title="Account" onDismiss={onDismiss}>
    <Flex mb="30px" justifyContent="space-between" alignItems="center" >
      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: '100%' }}
        mr='20px'
      >
        {account}
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
        <IoIosSwitch color="white" fontSize='20px' />
        <Text color="white" fontSize="14px" >Switch Wallet</Text>
      </SwitchButton>
      <DisconnectButton
        onClick={() => {
          logout();
          window.localStorage.removeItem(localStorageKey);
          onDismiss();
          window.location.reload();
        }}
      >
        <AiOutlineDisconnect color="white" fontSize='20px' />
        <Text color="white" fontSize="14px" >Disconnect Wallet</Text>
      </DisconnectButton>
    </Flex>
  </Modal>
);

export default NewAccountModal;
