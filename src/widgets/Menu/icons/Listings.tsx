import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 510 510" {...props}>
      <g>
        <path d="m315 8.787v81.213h81.213z" />
        <path d="m270 285c0-74.439 60.56-135 135-135v-30h-120v-120h-225v450h345v-30c-74.44 0-135-60.56-135-135zm-150-195h120v30h-120zm120 270h-120v-30h120zm0-60h-120v-30h120zm0-60h-120v-30h120zm15-60h-135v-30h135z" />
        <path d="m405 180c-57.897 0-105 47.102-105 105s47.103 105 105 105 105-47.103 105-105-47.103-105-105-105zm-10.606 151.819-40.606-40.606 21.212-21.213 19.394 19.394 49.393-49.394 21.213 21.213z" />
        <path d="m30 30h-30v480h375v-30h-345z" />
      </g>
    </Svg>
  );
};

export default Icon;
