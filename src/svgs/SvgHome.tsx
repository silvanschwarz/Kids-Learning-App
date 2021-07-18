import * as React from "react"
import Svg, { G, Circle, Ellipse, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={46} height={46} viewBox="0 0 46 46" fill="none">
      <G>
        <Circle cx={23} cy={19} r={16} fill="#8871FF" />
        <Ellipse
          cx={15.27}
          cy={9.064}
          rx={3}
          ry={1.5}
          transform="rotate(-39.415 15.27 9.064)"
          fill="#fff"
          fillOpacity={0.69}
        />
      </G>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M30.731 18.152l-7.178-6.54a.817.817 0 00-1.106 0l-7.178 6.54a.815.815 0 00-.213.903.815.815 0 00.765.524h1.147v6.554c0 .26.21.47.47.47h3.935c.26 0 .47-.21.47-.47v-3.979h2.313v3.98c0 .26.211.47.47.47h3.935c.26 0 .471-.21.471-.47v-6.555h1.147a.815.815 0 00.765-.524.816.816 0 00-.213-.902z"
          fill="#fff"
        />
      </G>
      <Circle cx={12} cy={13.5} r={1.5} fill="#fff" fillOpacity={0.69} />
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M15 11h16v16H15z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

const SvgHome = React.memo(SvgComponent);
export default SvgHome
