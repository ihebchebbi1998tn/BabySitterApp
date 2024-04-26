import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../utils/types/iconType";
import Colors from "../../utils/colors";


function ArrowDownIcon({ color, size, strokeWidth }: IconProps) {
 return (
  <Svg width={size}
   height={size} 
  
  viewBox="0 0 24 24"
   fill="none"  >
   <Path
    d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
    stroke={color ? color : Colors.black}
    strokeWidth={strokeWidth ? strokeWidth : 1.5}
    strokeMiterlimit={10}
    strokeLinecap="round"
    strokeLinejoin="round"
    
   />
  </Svg>
 );
}

export default ArrowDownIcon;
