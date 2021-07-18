import * as React from "react"
import Svg, { G, Circle, Ellipse, Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={78} height={78} viewBox="0 0 78 78" fill="none">
      <G>
        <Circle cx={39} cy={35} r={32} fill="#8871FF" />
        <Ellipse
          cx={23.54}
          cy={15.127}
          rx={6}
          ry={3}
          transform="rotate(-39.415 23.54 15.127)"
          fill="#fff"
          fillOpacity={0.69}
        />
      </G>
      <Circle cx={17} cy={24} r={3} fill="#fff" fillOpacity={0.69} />
      <Path
        d="M36.294 23.97l-6.078 4.552h-5.55A1.67 1.67 0 0023 30.188v11.6c0 .917.75 1.666 1.665 1.666h5.551l6.078 4.551a1.657 1.657 0 002.664-1.332v-21.37c0-1.388-1.582-2.165-2.664-1.332zM44.453 26.69a1.96 1.96 0 00-2.747 0 1.96 1.96 0 000 2.748c3.608 3.608 3.608 9.464 0 13.072a1.96 1.96 0 000 2.748c.388.388.888.555 1.36.555.471 0 1-.194 1.36-.583 5.162-5.079 5.162-13.405.027-18.54z"
        fill="#fff"
      />
      <Path
        d="M46.618 22.333a1.96 1.96 0 000 2.748c2.915 2.914 4.525 6.771 4.525 10.907 0 4.135-1.61 7.993-4.525 10.907a1.96 1.96 0 000 2.748c.389.388.889.582 1.36.582.5 0 1-.194 1.36-.555A19.21 19.21 0 0055 36.016c0-5.163-1.998-9.992-5.662-13.655-.721-.777-1.943-.777-2.72-.028z"
        fill="#fff"
      />
    </Svg>
  )
}

const SvgSpeak = React.memo(SvgComponent);
export default SvgSpeak
