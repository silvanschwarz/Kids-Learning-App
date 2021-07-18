import * as React from "react"
import Svg, {G, Circle, Ellipse, Path} from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width={46} height={46} viewBox="0 0 46 46" fill="none">
            <G>
                <Circle cx={23} cy={19} r={16} fill="#F2564C"/>
            </G>
            <Ellipse
                cx={15.27}
                cy={9.064}
                rx={3}
                ry={1.5}
                transform="rotate(-39.415 15.27 9.064)"
                fill="#fff"
                fillOpacity={0.69}
            />
            <Circle cx={12} cy={13.5} r={1.5} fill="#fff" fillOpacity={0.69}/>
            <Path
                d="M20.788 24.5a2.305 2.305 0 01-1.634-.688l-3.475-3.5a2.346 2.346 0 010-3.3 2.309 2.309 0 013.278 0l1.958 1.971 6.477-5.587a2.307 2.307 0 013.215.637 2.345 2.345 0 01-.203 2.862l-8.11 6.998a2.311 2.311 0 01-1.506.607z"
                fill="#fff"
            />
        </Svg>
    )
}

const SvgCheck = React.memo(SvgComponent);
export default SvgCheck
