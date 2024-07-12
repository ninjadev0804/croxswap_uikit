import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = () => {
  return (
    <Svg viewBox="0 0 30 30"><path d="M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z"/></Svg>
  );
};

export default Icon;
