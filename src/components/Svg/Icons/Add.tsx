import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 30" {...props}>
      <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" />
    </Svg>
  );
};

export default Icon;
