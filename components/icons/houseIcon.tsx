import * as React from "react"
import Svg, { Path } from "react-native-svg";
import Colors from "../../utils/colors";
import { IconProps } from "../../utils/types/iconType";
function HouseIcon({ color =Colors.primary, size = 24, strokeWidth = 1.6 }: IconProps){
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <path
        d="M2 22h20"
        stroke="#000"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.95 22L3 9.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V22"
        stroke="#000"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
      <path
        d="M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5zM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1zM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1z"
        stroke="#000"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
      <path
        d="M19 7l-.03-3h-4.4"
        stroke="#000"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HouseIcon;
