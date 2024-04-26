import * as React from "react";
import Svg, { Path } from "react-native-svg";
import Colors from "../../utils/colors";
import { IconProps } from "../../utils/types/iconType";

function LocalIcon({ color, size, strokeWidth }: IconProps) {
  // Définir une valeur de strokeWidth plus petite
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      // data-name="Layer 1"
    >
      <Path
        d="M150 34.94c-27.5-27.5-72-27.5-100 0a70.49 70.49 0 00-8 90l33.5 48a30.4 30.4 0 0049.5 0l33.5-48a71.18 71.18 0 00-8.5-90zm-8.5 78.5l-33.5 48a10.31 10.31 0 01-16.5 0l-33.5-48a50.14 50.14 0 016-64.5c20-20 52-20 71.5 0a50.19 50.19 0 016 64.5zm-41.5-67a35 35 0 1035 35 34.78 34.78 0 00-35-35zm0 50a15 15 0 1115-15 14.73 14.73 0 01-15 15z"
        fill={color}
        strokeWidth={1.5} // Définir la valeur de strokeWidth
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default LocalIcon;
