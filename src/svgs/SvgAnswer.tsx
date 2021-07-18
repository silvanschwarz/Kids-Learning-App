import * as React from "react"
import Svg, {Circle, Ellipse, G} from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width={46} height={46} viewBox="0 0 46 46" fill="none">
            {/*<Circle cx={16} cy={16} r={16} fill="#DADADA" />*/}
            <G>
                <Circle cx={23} cy={19} r={16} fill="#DADADA"/>
            </G>
            <Ellipse
                cx={8.27}
                cy={6.064}
                rx={3}
                ry={1.5}
                transform="rotate(-39.415 8.27 6.064)"
                fill="#fff"
                fillOpacity={0.69}
            />
            <Circle cx={5} cy={10.5} r={1.5} fill="#fff" fillOpacity={0.69} />
        </Svg>
    )
}

const SvgAnswer = React.memo(SvgComponent);
export default SvgAnswer;
