import * as React from "react"
import Svg, { G, Path, Text, TSpan } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={66}
      height={64}
      viewBox="0 0 66 64"
      {...props}
    >
      <G fill="#fafafa">
        <Path d="M53 19.963a20 20 0 01-32.552 15.609A1.934 1.934 0 0120.3 32.7l.909-.909a1.939 1.939 0 012.572-.16 14.84 14.84 0 10-.944-22.442l4.093 4.093a1.29 1.29 0 01-.912 2.2H14.29a1.29 1.29 0 01-1.29-1.29V2.47a1.29 1.29 0 012.2-.912l3.984 3.98A20 20 0 0153 19.963zm-14.59 6.354l.792-1.019a1.935 1.935 0 00-.34-2.716l-3.282-2.553v-8.416a1.935 1.935 0 00-1.935-1.935h-1.29a1.935 1.935 0 00-1.935 1.935v10.94l5.275 4.1a1.936 1.936 0 002.716-.34z" />
        <Text
          transform="translate(33 59)"
          fontSize={21}
          fontFamily="ArialMT,Arial"
        >
          <TSpan x={-32.669} y={0}>
            {"History"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default SvgComponent
