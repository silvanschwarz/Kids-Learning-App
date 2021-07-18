import * as React from "react"
import Svg, { G, Circle, Ellipse, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent() {
  return (
    <Svg width={54} height={54} viewBox="0 0 54 54" fill="none">
      <G>
        <Circle cx={27} cy={23} r={20} fill="#8871FF" />
        <Ellipse
          cx={17.338}
          cy={10.58}
          rx={3.75}
          ry={1.875}
          transform="rotate(-39.415 17.338 10.58)"
          fill="#fff"
          fillOpacity={0.69}
        />
      </G>
      <Circle cx={13.25} cy={16.125} r={1.875} fill="#fff" fillOpacity={0.69} />
      <Path
        d="M25.309 16.106l-3.799 2.845h-3.47c-.572 0-1.04.468-1.04 1.04v7.252c0 .572.468 1.04 1.04 1.04h3.47l3.799 2.845c.694.52 1.665.035 1.665-.833V16.94c0-.867-.989-1.353-1.665-.833zM30.408 17.806a1.225 1.225 0 00-1.717 0 1.225 1.225 0 000 1.718 5.78 5.78 0 010 8.17 1.225 1.225 0 000 1.717 1.193 1.193 0 001.7-.018c3.226-3.174 3.226-8.378.017-11.587z"
        fill="#fff"
      />
      <Path
        d="M31.761 15.083a1.225 1.225 0 000 1.717 9.564 9.564 0 012.828 6.817 9.564 9.564 0 01-2.828 6.817 1.225 1.225 0 00.85 2.082c.313 0 .625-.122.85-.347A12.007 12.007 0 0037 23.635c0-3.227-1.25-6.245-3.539-8.535-.45-.485-1.214-.485-1.7-.017z"
        fill="#fff"
      />
    </Svg>
  )
}

const SvgSmallSpeak = React.memo(SvgComponent);
export default SvgSmallSpeak
