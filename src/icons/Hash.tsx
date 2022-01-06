import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

const Hash = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" />
    </G>
  </Svg>
);

export default Hash;
