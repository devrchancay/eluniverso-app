import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

const Home = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
      />
      <Path d="M9 22V12h6v10" />
    </G>
  </Svg>
);

export default Home;
