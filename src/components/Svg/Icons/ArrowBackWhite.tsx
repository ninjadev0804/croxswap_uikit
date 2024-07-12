import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 30" {...props}>
      <g fill="none"><path d="M2 11l7-9v5c11.953 0 13.332 9.678 13 15c-.502-2.685-.735-7-13-7v5l-7-9z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></g>
    </Svg>
  );
};

export default Icon;
