import * as React from "react"
import Svg, { Path, Ellipse, Circle } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={64} height={64} viewBox="0 0 64 64" fill="none">
      <Path
        d="M53.5 25.938c4.667 2.694 4.667 9.43 0 12.124l-27 15.589c-4.667 2.694-10.5-.674-10.5-6.063V16.412c0-5.388 5.833-8.756 10.5-6.062l27 15.589z"
        fill="#8871FF"
      />
      <Ellipse
        cx={32.624}
        cy={20.794}
        rx={6}
        ry={3}
        transform="rotate(30 32.624 20.794)"
        fill="#fff"
        fillOpacity={0.69}
      />
      <Circle
        cx={23.098}
        cy={15.098}
        r={3}
        transform="rotate(60 23.098 15.098)"
        fill="#fff"
        fillOpacity={0.69}
      />
    </Svg>
  )
}

const SvgNext = React.memo(SvgComponent);
export default SvgNext
