import * as React from "react"
import Svg, { G, Rect, Path, Ellipse } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width={294} height={78} viewBox="0 0 294 72">
            <G>
                <Rect x={7} y={3} width={280} height={64} rx={32} fill="#8871FF" />
            </G>
            <Path
                d="M48.97 27.647l-4.558 3.414h-4.163c-.687 0-1.249.562-1.249 1.249v8.7c0 .688.562 1.25 1.249 1.25h4.163l4.559 3.413a1.243 1.243 0 001.998-.999V28.646c0-1.04-1.187-1.623-1.998-.999zM55.09 29.687a1.47 1.47 0 00-2.06 0 1.47 1.47 0 000 2.06 6.935 6.935 0 010 9.805 1.47 1.47 0 000 2.06c.291.292.666.417 1.02.417s.75-.146 1.02-.437c3.871-3.81 3.871-10.054.02-13.905z"
                fill="#fff"
            />
            <Path
                d="M56.714 26.419a1.47 1.47 0 000 2.06 11.476 11.476 0 013.393 8.181c0 3.102-1.207 5.995-3.393 8.18a1.47 1.47 0 000 2.061c.291.292.666.438 1.02.438.374 0 .75-.146 1.02-.417A14.409 14.409 0 0063 36.681c0-3.872-1.499-7.494-4.246-10.241-.541-.583-1.457-.583-2.04-.021z"
                fill="#fff"
            />
            <Ellipse
                rx={6.624}
                ry={3.083}
                transform="matrix(.91283 -.40834 .49535 .8687 31.361 14.053)"
                fill="#fff"
                fillOpacity={0.69}
            />
            <Ellipse
                cx={19.419}
                cy={22}
                rx={3.387}
                ry={3}
                fill="#fff"
                fillOpacity={0.69}
            />
        </Svg>
    )
}

const SvgSpeakerWords = React.memo(SvgComponent)
export default SvgSpeakerWords
