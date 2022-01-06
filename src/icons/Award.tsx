import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Award = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Award;
