import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import Text from '../../components/Text/Text'
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  background?: string;
  isNew?: boolean
}

const StyledModal = styled.div`
  background: ${({ theme }) => theme.modal.modalBridgeBackground};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`;

const NewStyledModal = styled.div`
  background: ${({ theme }) => theme.modal.modalBridgeBackground};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9eaeb;
  align-items: center;
  padding: 12px 24px;
`;

const NewModalHeader = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  padding: 20px 24px 12px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const NewModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "20px 24px",
  isNew
}) => {
  return (
    title === "Account" ? (
      <StyledModal style={{ borderRadius: '10px', border: 'none' }}>
        <ModalHeader style={{ borderBottom: 'none', padding: '28px 24px 12px 24px' }}>
          <ModalTitle>
            {onBack && (
              <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
                <ArrowBackIcon color="primary" />
              </IconButton>
            )}
            <Heading size="18px" style={{ lineHeight: "28px" }}>{title}</Heading>
          </ModalTitle>
          {!hideCloseButton && (title === "Account" || title === "Select asset" || title === "Connect Wallet") && (
            <CloseIcon color="closeIcon" onClick={onDismiss} />
          )}
        </ModalHeader>
        <Flex flexDirection="column" p={bodyPadding}>
          {children}
        </Flex>
      </StyledModal>
    ) : !isNew ? (
      <StyledModal>
        <ModalHeader>
          <ModalTitle>
            {onBack && (
              <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
                <ArrowBackIcon color="primary" />
              </IconButton>
            )}
            <Heading>{title}</Heading>
          </ModalTitle>
          {!hideCloseButton && (
            <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
              <CloseIcon color="primary" />
            </IconButton>
          )}
        </ModalHeader>
        <Flex flexDirection="column" p={bodyPadding}>
          {children}
        </Flex>
      </StyledModal>
    ) : (
      <NewStyledModal>
        <NewModalHeader>
          <NewModalTitle>
            {onBack && (
              <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
                <ArrowBackIcon color="primary" />
              </IconButton>
            )}
            <Text bold fontSize="18px">{title}</Text>
          </NewModalTitle>
          {!hideCloseButton && (
            <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
              <CloseIcon color="primary" />
            </IconButton>
          )}
        </NewModalHeader>
        <Flex flexDirection="column" p='10px 24px 20px'>
          {children}
        </Flex>
      </NewStyledModal>
    )
  )
};

export default Modal;
