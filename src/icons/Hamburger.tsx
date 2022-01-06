import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Hamburger = (props: SvgProps) => (
  <Svg width={24} height={16} fill="none" {...props}>
    <Path
      d="M0 16h24v-2.667H0V16Zm0-6.667h24V6.667H0v2.666ZM0 0v2.667h24V0H0Z"
      fill="#323232"
    />
  </Svg>
);

export default Hamburger;
