import React from "react";
import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import capitalize from "lodash/capitalize";
import Flex from "../Flex/Flex";
import { CheckmarkIcon, AddIcon, AutoRenewIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";
import { variants } from "./types";

const Row = styled(Flex)`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      {Object.values(variants).map((variant) => (
        <Row key={variant}>
          <Button variant={variant}>{capitalize(variant)}</Button>
          <Button variant={variant} disabled>Disabled</Button>
          <Button variant={variant} round>Rounded</Button>
          <Button variant={variant} size="sm">Small</Button>
        </Row>
      ))}
    </>
  );
};

export const Variants: React.FC = () => {
  return (
    <BrowserRouter>
      <Row>
        <Button as="a" href="https://pancakeswap.finance" target="_blank" rel="noreferrer">
          As an anchor
        </Button>
        <Button as={Link} to="/router-link" variant="secondary">
          As an React Router link
        </Button>
        <Button as="a" href="https://pancakeswap.finance" disabled>
          As an anchor (disabled)
        </Button>
      </Row>
      <Row>
        <Button fullWidth>Full size</Button>
      </Row>
      <Row>
        <Button isLoading endIcon={<AutoRenewIcon spin color="currentColor" />}>
          Approving
        </Button>
        <Button isLoading variant="success">
          Approving
        </Button>
      </Row>
      <Row>
        <Button startIcon={<CheckmarkIcon color="currentColor" />}>Start Icon</Button>
        <Button endIcon={<CheckmarkIcon color="currentColor" />}>End Icon</Button>
        <Button startIcon={<CheckmarkIcon color="currentColor" />} endIcon={<CheckmarkIcon color="currentColor" />}>Start & End Icon</Button>
      </Row>
      <Row>
        <IconButton>
          <CheckmarkIcon color="currentColor" />
        </IconButton>
        <IconButton variant="secondary">
          <AddIcon color="primary" width='30px' />
        </IconButton>
      </Row>
      <Row>
        <IconButton size="sm" variant="danger">
          <CheckmarkIcon color="currentColor" />
        </IconButton>
        <IconButton size="sm" round variant="success">
          <AddIcon color="currentColor" />
        </IconButton>
      </Row>
    </BrowserRouter>
  );
};
