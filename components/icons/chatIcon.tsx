import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../utils/types/iconType";
import Colors from "../../utils/colors";
function chatIcon({ color = Colors.primary, size, strokeWidth }: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M14.17 20.89c4.184-.277 7.516-3.657 7.79-7.9.053-.83.053-1.69 0-2.52-.274-4.242-3.606-7.62-7.79-7.899a33.182 33.182 0 00-4.34 0c-4.184.278-7.516 3.657-7.79 7.9-.053.83-.053 1.69 0 2.52.1 1.545.783 2.976 1.588 4.184.467.845.159 1.9-.328 2.823-.35.665-.526.997-.385 1.237.14.24.455.248 1.084.263 1.245.03 2.084-.322 2.75-.813.377-.279.566-.418.696-.434.13-.016.387.09.899.3.46.19.995.307 1.485.34 1.425.094 2.914.094 4.342 0z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M11.995 12h.01m3.986 0H16m-8 0h.009"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default chatIcon;
