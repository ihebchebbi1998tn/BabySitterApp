import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Colors from "../../utils/colors";
import { IconProps } from "../../utils/types/iconType";

function HorlogeIcon({ color = Colors.primary, size, strokeWidth=1 }: IconProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 510 510"
    >
      <Path
        d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204z"
        fill={color} // Utilisez la couleur spécifiée pour remplir l'icône
      />
      <Path
        d="M267.75 127.5L229.5 127.5 229.5 280.5 362.1 362.1 382.5 328.95 267.75 260.1z"
        fill={color} // Utilisez la couleur spécifiée pour remplir l'icône
        strokeWidth={1}
      />
    </Svg>
  )
}

export default HorlogeIcon;
