import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 30" {...props}>
      <g fill="none"><path d="M8 5l-5 5l5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 10h8c5.523 0 10 4.477 10 10v1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></g>
    </Svg>
  );
};

export default Icon;
