import * as React from 'react';
import Svg, { G, Circle, Ellipse, Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={46} height={46} viewBox="0 0 46 46" fill="none">
      <G>
        <Circle cx={23} cy={19} r={16} fill="#8871FF" />
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
      <Path
        d="M29.297 17.12H21.05l2.101-2.102c1.616-1.615-.901-4.113-2.521-2.493l-5.124 5.12c-.685.686-.666 1.828.014 2.508l5.123 5.12c1.616 1.615 4.115-.901 2.495-2.52l-2.09-2.088h8.224c2.29 0 2.311-3.546.026-3.546z"
        fill="#fff"
      />
      <Circle cx={12} cy={13.5} r={1.5} fill="#fff" fillOpacity={0.69} />
    </Svg>
  );
}

const SvgArrowLeft = React.memo(SvgComponent);
export default SvgArrowLeft;
