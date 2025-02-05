import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { CopyIcon, CopytoClipboard } from "../../components/Svg";

interface Props {
  toCopy: string;
  title: string;
}

const StyleButton = styled(Text).attrs({ role: "button" })`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "none")};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
`;

const CopyToClipboard: React.FC<Props> = ({ toCopy, title, children, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    title === "Account" ? (
      <StyleButton
        small
        bold
        onClick={() => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(toCopy);
            setIsTooltipDisplayed(true);
            setTimeout(() => {
              setIsTooltipDisplayed(false);
            }, 1000);
          }
        }}
        {...props}
      >
        <CopytoClipboard color="primary" ml="4px" />
        <Tooltip isTooltipDisplayed={isTooltipDisplayed} style={{width: "70px", left: "-15px"}}>Copied</Tooltip>
      </StyleButton>
    ) : (
      <StyleButton
        small
        bold
        onClick={() => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(toCopy);
            setIsTooltipDisplayed(true);
            setTimeout(() => {
              setIsTooltipDisplayed(false);
            }, 1000);
          }
        }}
        {...props}
      >
        {children}
        <CopyIcon width="20px" color="primary" ml="4px" />
        <Tooltip isTooltipDisplayed={isTooltipDisplayed}>Copied</Tooltip>
      </StyleButton>
    )
  );
};

export default CopyToClipboard;
