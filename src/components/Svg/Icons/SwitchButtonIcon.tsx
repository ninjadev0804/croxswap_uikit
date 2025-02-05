import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10H16L14 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 14H8L10 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V21C16.971 21 21 16.971 21 12V12C21 7.029 16.971 3 12 3V3C7.029 3 3 7.029 3 12V12C3 16.971 7.029 21 12 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  );
};

export default Icon;
