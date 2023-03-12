import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  width: number;
  height: number;
}

const SearchIcon = ({ width, height }: PropsType) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
        stroke="#323232"
        strokeWidth={2}
      />
      <Path
        d="m14 14 2 2"
        stroke="#323232"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        stroke="#323232"
        strokeWidth={2}
      />
    </Svg>
  );
};

export default SearchIcon;
