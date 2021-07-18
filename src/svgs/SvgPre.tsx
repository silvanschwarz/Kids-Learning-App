import * as React from "react"
import Svg, { Path, Ellipse, Circle } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={64} height={64} viewBox="0 0 64 64" fill="none">
      <Path
        d="M10.5 25.938c-4.667 2.694-4.667 9.43 0 12.124l27 15.589c4.667 2.694 10.5-.674 10.5-6.063V16.412c0-5.388-5.833-8.756-10.5-6.062l-27 15.589z"
        fill="#8871FF"
      />
      <Ellipse
        cx={23.696}
        cy={24.598}
        rx={6}
        ry={3}
        transform="rotate(-30 23.696 24.598)"
        fill="#fff"
        fillOpacity={0.69}
      />
      <Circle cx={14} cy={30} r={3} fill="#fff" fillOpacity={0.69} />
    </Svg>
  )
}

const SvgPre = React.memo(SvgComponent);
export default SvgPre
