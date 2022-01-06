import React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Search = (props: SvgProps) => (
  <Svg width={24} height={26} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M10.5 19.052c4.142 0 7.5-3.387 7.5-7.565 0-4.178-3.358-7.564-7.5-7.564-4.142 0-7.5 3.386-7.5 7.564s3.358 7.565 7.5 7.565Z"
      stroke="#CBD2D9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m21 22.077-5.2-5.244"
      stroke="#CBD2D9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Search;
