import * as React from "react"
import Svg, { G, Rect, Path, Ellipse, Circle } from "react-native-svg"

interface Props {
    color?: string
}

function SvgComponent(props: Props) {
    return (
        <Svg width={262} height={78} viewBox="0 0 262 78" fill="none">
            <G>
                <Rect x={7} y={3} width={248} height={64} rx={32} fill= {props.color ||"#8871FF"} />
            </G>
            <Path
                d="M95.59 38.3a5.85 5.85 0 011.72.1c.613.107 1.053.26 1.32.46-.107 1.533-.667 2.727-1.68 3.58-1 .84-2.374 1.26-4.12 1.26-1.654 0-2.947-.513-3.88-1.54-.934-1.027-1.4-2.487-1.4-4.38 0-2.427.666-4.473 2-6.14 1.333-1.667 3.013-2.5 5.04-2.5 1.24 0 2.24.387 3 1.16.76.76 1.2 1.827 1.32 3.2-.707.307-1.314.507-1.82.6-.507.093-1.147.14-1.92.14 0-.867-.114-1.533-.34-2-.214-.467-.52-.7-.92-.7-.56 0-1.027.513-1.4 1.54-.374 1.027-.56 2.267-.56 3.72 0 1.413.166 2.5.5 3.26.346.747.833 1.12 1.46 1.12.64 0 1.106-.253 1.4-.76.293-.507.386-1.213.28-2.12zm4.723.04c0-1.88.54-3.413 1.62-4.6 1.093-1.2 2.506-1.8 4.24-1.8 1.306 0 2.32.367 3.04 1.1.72.733 1.08 1.773 1.08 3.12 0 .84-.134 1.693-.4 2.56-.254.867-.614 1.62-1.08 2.26-.534.733-1.174 1.287-1.92 1.66-.734.373-1.567.56-2.5.56-1.294 0-2.3-.433-3.02-1.3-.707-.88-1.06-2.067-1.06-3.56zm6-1.08c0-1.04-.08-1.8-.24-2.28-.16-.493-.414-.74-.76-.74-.32 0-.587.327-.8.98-.2.653-.3 1.507-.3 2.56 0 .867.093 1.607.28 2.22.186.6.44.9.76.9.333 0 .593-.333.78-1 .186-.68.28-1.56.28-2.64zm9.994 3.76v1.12c.013.36.033.793.06 1.3-.374.107-.88.2-1.52.28-.64.08-1.234.12-1.78.12-.2-1.453-.38-3.32-.54-5.6-.147-2.28-.22-4.193-.22-5.74.306-.16.74-.287 1.3-.38.56-.093 1.133-.14 1.72-.14a7.458 7.458 0 011.54.16c-.067.48-.114.827-.14 1.04a9.884 9.884 0 00-.06.64c.386-.56.826-.98 1.32-1.26a3.224 3.224 0 011.62-.42c.933 0 1.64.34 2.12 1.02.48.667.72 1.66.72 2.98 0 1.04-.087 2.24-.26 3.6-.174 1.347-.354 2.367-.54 3.06-.52 0-1.094-.027-1.72-.08a39.092 39.092 0 01-2.16-.3c.226-1.253.4-2.42.52-3.5.133-1.093.2-1.98.2-2.66 0-.373-.054-.647-.16-.82a.537.537 0 00-.5-.28c-.254 0-.5.147-.74.44-.24.293-.454.7-.64 1.22-.054.84-.094 1.613-.12 2.32a93.39 93.39 0 00-.02 1.88zm13.522-2.66a5.4 5.4 0 011.38.36c.48.187.907.427 1.28.72 0 .96-.3 1.773-.9 2.44-.6.667-1.433 1-2.5 1-1.346 0-2.393-.473-3.14-1.42-.733-.96-1.1-2.347-1.1-4.16 0-.427.007-.867.02-1.32.014-.467.04-.953.08-1.46a11.187 11.187 0 01-1.4-.3c0-.427.04-.833.12-1.22.08-.387.194-.687.34-.9.134.04.294.087.48.14.2.04.44.08.72.12.08-.547.16-1.02.24-1.42.094-.413.187-.78.28-1.1.8 0 1.574.053 2.32.16.76.093 1.374.22 1.84.38-.08.32-.166.68-.26 1.08-.093.387-.173.787-.24 1.2.56.013 1.094.013 1.6 0 .52-.027.974-.067 1.36-.12 0 .307-.033.653-.1 1.04-.066.387-.16.74-.28 1.06-.333.067-.76.12-1.28.16a22.05 22.05 0 01-1.64.02c-.066.507-.12 1.013-.16 1.52-.04.507-.06.987-.06 1.44 0 1.12.04 1.88.12 2.28.08.387.214.58.4.58.12 0 .227-.2.32-.6.094-.413.147-.973.16-1.68zm7.679-10.48c.4 0 .774.033 1.12.1.347.067.64.16.88.28-.12.28-.253.693-.4 1.24a13.877 13.877 0 00-.32 1.42c-.453.08-.96.14-1.52.18-.56.027-1.193.033-1.9.02a7.256 7.256 0 01-.22-.88c-.04-.293-.06-.58-.06-.86 0-.213.007-.4.02-.56.027-.16.06-.307.1-.44.307-.173.647-.3 1.02-.38.387-.08.814-.12 1.28-.12zm-2.78 5.04c.36-.213.78-.373 1.26-.48.48-.107 1-.16 1.56-.16.267 0 .527.013.78.04.267.027.52.06.76.1-.293.867-.553 2.247-.78 4.14a81.877 81.877 0 00-.44 6.22c-.28.147-.64.26-1.08.34a6.25 6.25 0 01-1.34.14c-.2 0-.373-.007-.52-.02a2.544 2.544 0 01-.38-.06 46.003 46.003 0 01-.26-5.48c.027-1.76.174-3.353.44-4.78zm10.215 8.1v1.12c.013.36.033.793.06 1.3-.374.107-.88.2-1.52.28-.64.08-1.234.12-1.78.12-.2-1.453-.38-3.32-.54-5.6-.147-2.28-.22-4.193-.22-5.74.306-.16.74-.287 1.3-.38.56-.093 1.133-.14 1.72-.14a7.458 7.458 0 011.54.16c-.067.48-.114.827-.14 1.04a9.884 9.884 0 00-.06.64c.386-.56.826-.98 1.32-1.26a3.224 3.224 0 011.62-.42c.933 0 1.64.34 2.12 1.02.48.667.72 1.66.72 2.98 0 1.04-.087 2.24-.26 3.6-.174 1.347-.354 2.367-.54 3.06-.52 0-1.094-.027-1.72-.08a39.092 39.092 0 01-2.16-.3c.226-1.253.4-2.42.52-3.5.133-1.093.2-1.98.2-2.66 0-.373-.054-.647-.16-.82a.537.537 0 00-.5-.28c-.254 0-.5.147-.74.44-.24.293-.454.7-.64 1.22-.054.84-.094 1.613-.12 2.32a93.39 93.39 0 00-.02 1.88zm12.653 2.18c-1.414 0-2.487-.473-3.22-1.42-.734-.947-1.1-2.307-1.1-4.08 0-.973.1-1.987.3-3.04.213-1.067.42-1.793.62-2.18a7.433 7.433 0 011.8-.24c.413 0 .766.027 1.06.08.306.053.54.127.7.22-.12.72-.214 1.453-.28 2.2-.067.747-.1 1.467-.1 2.16 0 1.227.073 2.187.22 2.88.146.68.353 1.02.62 1.02.253 0 .453-.393.6-1.18.146-.787.22-1.813.22-3.08 0-.6-.027-1.22-.08-1.86-.054-.653-.107-1.107-.16-1.36.506-.213 1.133-.38 1.88-.5.746-.133 1.473-.2 2.18-.2.066.307.113.7.14 1.18.04.48.06 1 .06 1.56 0 2.56-.46 4.507-1.38 5.84-.92 1.333-2.28 2-4.08 2zm11.496-7.12c.16.04.314.073.46.1a5 5 0 00.4.02h.36a2.33 2.33 0 00.3-.04c.08-.32.14-.62.18-.9.054-.28.08-.533.08-.76 0-.28-.04-.487-.12-.62a.334.334 0 00-.32-.2c-.266 0-.52.22-.76.66-.24.427-.433 1.007-.58 1.74zm2.42 3.08a5.26 5.26 0 011.54.56c.534.267.967.573 1.3.92-.106.347-.353.72-.74 1.12-.386.4-.846.733-1.38 1a5.765 5.765 0 01-1.4.48c-.493.12-1.013.18-1.56.18-1.386 0-2.473-.4-3.26-1.2-.773-.813-1.16-1.913-1.16-3.3 0-.867.134-1.713.4-2.54.28-.84.674-1.6 1.18-2.28.574-.76 1.234-1.353 1.98-1.78.747-.427 1.514-.64 2.3-.64 1.12 0 2.014.287 2.68.86.667.56 1 1.313 1 2.26 0 .427-.046.9-.14 1.42-.08.507-.186.947-.32 1.32-.413.2-.926.353-1.54.46-.6.093-1.32.14-2.16.14-.24 0-.48-.013-.72-.04-.226-.027-.453-.06-.68-.1-.013.08-.02.173-.02.28v.44c0 .8.1 1.413.3 1.84.214.427.514.64.9.64.254 0 .527-.207.82-.62.294-.413.52-.887.68-1.42z"
                fill="#fff"
            />
            <Ellipse
                cx={28.577}
                cy={14.053}
                rx={6}
                ry={3}
                transform="rotate(-26.796 28.577 14.053)"
                fill="#fff"
                fillOpacity={0.69}
            />
            <Circle cx={18} cy={22} r={3} fill="#fff" fillOpacity={0.69} />
        </Svg>
    )
}

const SvgContinue = React.memo(SvgComponent);
export default SvgContinue;