import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../utils/types/iconType";

export function DeleteIcon({ color, size, strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 01-1.2 1.128C15.843 22 14.56 22 11.994 22c-2.57 0-3.855 0-4.814-.585a3.999 3.999 0 01-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a1.994 1.994 0 00-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 00-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5M9.5 16.5v-6M14.5 16.5v-6"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
