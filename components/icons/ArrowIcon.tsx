import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../utils/types/iconType";
import Colors from "../../utils/colors";

function ArrowIcon({ color=Colors.primary, size=24, strokeWidth=1.5 }: IconProps) {
 return (
    
  <Svg 
  width={24}
   height={24} 
   viewBox="0 0 15 32"
       fill="none">
   <Path
        d="M12.45 9.406L8.375 5.331a1.241 1.241 0 00-1.75 0L2.55 9.406M12.45 22.594l-4.075 4.075a1.241 1.241 0 01-1.75 0L2.55 22.594"
        stroke="#FFAEA0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
 );
}

export default ArrowIcon;
