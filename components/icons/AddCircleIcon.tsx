import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../utils/types/iconType";
import Colors from "../../utils/colors";

function AddCircleIcon({ color, size }: IconProps) {
 return (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
   <Path
    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
    fill={color ? color : Colors.black}
   />
   <Path
    d="M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75z"
    fill={color ? color : Colors.black}
   />
   <Path
    d="M12 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v8c0 .41-.34.75-.75.75z"
    fill={color ? color : Colors.black}
   />
  </Svg>
 );
}

export default AddCircleIcon;
