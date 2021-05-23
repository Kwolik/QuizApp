import * as React from "react"
import Svg, { G, Path, Text, TSpan } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={63}
      viewBox="0 0 60 63"
      {...props}
    >
      <G fill="#fafafa">
        <Path d="M29.318 10.377L12.855 23.936v14.635A1.429 1.429 0 0014.282 40l10.006-.026a1.429 1.429 0 001.423-1.428v-8.548a1.429 1.429 0 011.429-1.429h5.715a1.429 1.429 0 011.427 1.429v8.54a1.429 1.429 0 001.429 1.433l10 .028a1.429 1.429 0 001.429-1.429V23.926L30.682 10.377a1.089 1.089 0 00-1.364 0zm26.006 9.216l-7.465-6.153V1.071a1.072 1.072 0 00-1.072-1.072h-5a1.072 1.072 0 00-1.072 1.072v6.484L32.72.977a4.286 4.286 0 00-5.447 0L4.67 19.593a1.072 1.072 0 00-.143 1.509l2.277 2.768a1.072 1.072 0 001.51.146l21-17.3a1.089 1.089 0 011.366 0l21.005 17.3a1.072 1.072 0 001.509-.143l2.277-2.768a1.072 1.072 0 00-.152-1.512z" />
        <Text
          transform="translate(30 59)"
          fontSize={21}
          fontFamily="Arial-BoldMT,Arial"
          fontWeight={700}
        >
          <TSpan x={-29.172} y={0}>
            {"Home"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default SvgComponent
