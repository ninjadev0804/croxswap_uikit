import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
  titleCard?: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb, titleCard }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    titleCard === "Connect Wallet" ? (
      <Button
        fullWidth
        variant="tertiary"
        onClick={() => {
          login(walletConfig.connectorId);
          window.localStorage.setItem(localStorageKey, "1");
          onDismiss();
        }}
        style={{ justifyContent: "flex-start", backgroundColor: '#2C2D3A', minWidth: '366px' }}
        mb={mb}
        p="36px 16px"
        id={`wallet-connect-${title.toLocaleLowerCase()}`}
      >
        <Icon width="32px" />
        <Text bold color="#4F5069" ml="16px">
          {title}
        </Text>
      </Button>
    ) : (
      <Button
        fullWidth
        variant="tertiary"
        onClick={() => {
          login(walletConfig.connectorId);
          window.localStorage.setItem(localStorageKey, "1");
          onDismiss();
        }}
        style={{ justifyContent: "space-between" }}
        mb={mb}
        id={`wallet-connect-${title.toLocaleLowerCase()}`}
      >
        <Text bold color="NewConnectColor" mr="16px">
          {title}
        </Text>
        <Icon width="32px" />
      </Button>
    )
  );
};

export default WalletCard;
