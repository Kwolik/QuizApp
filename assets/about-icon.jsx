import * as React from "react"
import Svg, { G, Path, Text, TSpan } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={63}
      viewBox="0 0 56 63"
      {...props}
    >
      <G fill="#fafafa">
        <Path d="M28 0a20 20 0 1020 20A20.007 20.007 0 0028 0zm-8 31a5 5 0 115-5 5 5 0 01-5 5zm3-19a5 5 0 115 5 5 5 0 01-5-5zm13 19a5 5 0 115-5 5 5 0 01-5 5z" />
        <Text
          transform="translate(28 59)"
          fontSize={21}
          fontFamily="ArialMT,Arial"
        >
          <TSpan x={-27.439} y={0}>
            {"About"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default SvgComponent
