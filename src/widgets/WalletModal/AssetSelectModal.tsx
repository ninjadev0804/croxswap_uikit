import React from "react";
import { SortIcon } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import { Input } from "../..";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AssetSelectModal: React.FC<Props> = ({ onDismiss = () => null }) => (
  <Modal title="Select asset" onDismiss={onDismiss}>
    <Input placeholder="Search name or paste address" />
    <Flex justifyContent="space-between" mt="20px" mb="300px">
      <Text fontSize="14px" >Token Name</Text>
      <SortIcon />
    </Flex>
  </Modal>
);

export default AssetSelectModal;
