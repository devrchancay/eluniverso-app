import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BookMark = (props: SvgProps) => (
  <Svg width={16} height={20} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="m15 19-7-5-7 5V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BookMark;
