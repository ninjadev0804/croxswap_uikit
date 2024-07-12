import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H20.8C27.5206 0 30.8809 0 33.4479 1.30792C35.7058 2.4584 37.5416 4.29417 38.6921 6.55211C40 9.11905 40 12.4794 40 19.2V20.8C40 27.5206 40 30.8809 38.6921 33.4479C37.5416 35.7058 35.7058 37.5416 33.4479 38.6921C30.8809 40 27.5206 40 20.8 40H19.2C12.4794 40 9.11905 40 6.55211 38.6921C4.29417 37.5416 2.4584 35.7058 1.30792 33.4479C0 30.8809 0 27.5206 0 20.8V19.2Z" fill="#3B3C4E"/>
        <path d="M20 20L29 11V18V11H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 11H13C11.895 11 11 11.895 11 13V27C11 28.105 11.895 29 13 29H27C28.105 29 29 28.105 29 27V23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  );
};

export default Icon;
