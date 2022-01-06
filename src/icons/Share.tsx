import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Share = (props: SvgProps) => (
  <Svg width={19} height={20} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.25 6.667c1.312 0 2.375-1.12 2.375-2.5 0-1.381-1.063-2.5-2.375-2.5s-2.375 1.119-2.375 2.5c0 1.38 1.063 2.5 2.375 2.5ZM4.75 12.5c1.312 0 2.375-1.12 2.375-2.5S6.062 7.5 4.75 7.5 2.375 8.62 2.375 10s1.063 2.5 2.375 2.5ZM14.25 18.333c1.312 0 2.375-1.119 2.375-2.5 0-1.38-1.063-2.5-2.375-2.5s-2.375 1.12-2.375 2.5c0 1.381 1.063 2.5 2.375 2.5Z"
      stroke="#7B8794"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m6.8 11.258 5.407 3.317M12.2 5.425 6.8 8.742"
      stroke="#7B8794"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Share;
