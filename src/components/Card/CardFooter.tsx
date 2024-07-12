import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
  border-top: 1px solid #3b3c4e;
  ${space}
`;

CardFooter.defaultProps = {
  m: "0px 24px 24px",
  pt: '24px'
};

export default CardFooter;
