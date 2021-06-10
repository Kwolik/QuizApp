import * as React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  const styles = StyleSheet.create({
    background: {
      position: 'absolute',
    },
  });

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={styles.background}
      {...props}
    >
      <Path
        data-name="Intersection 3"
        d="M12.644 850.5c-4.319-4.222-8.821-10.6-12.643-20.23V604.291c26.045-8.4 63.968 17.976 106.4 44.35 59.744 37.132 128.428 74.265 185.489 14.353 53.483-56.157 84.46-68.618 101.109-61.232v247.171q-1.088.814-2.273 1.568z"
        fill="#ffa200"
      />
      <Path
        data-name="Intersection 4"
        d="M0 850.5V681.694c10.405-2.009 23.306 5.168 38.425 12.344 21.612 10.258 47.752 20.516 77.6 3.946 86.983-48.291 73.773-178.218 226.091-27.314 38.133 37.779 48.055 67.029 50.883 91.7v88.13z"
        fill="#ff5656"
      />
      <Path
        data-name="Intersection 1"
        d="M0 184.489V0h393v150.756c-25.542 17.783-66.1.4-112.751-16.982-42.051-15.666-89.05-31.334-134.461-21.248-15.341 3.407-31.793 9.593-46.651 20.132C60.77 159.874 27.5 184.634 3.189 184.637q-1.623.001-3.189-.148z"
        fill="#ff8aff"
      />
      <Path
        data-name="Intersection 2"
        d="M205.994 64.945C81.587 23.321 41.335 39.245 13.641 55.177c-4.8 2.762-9.222 5.522-13.642 7.984V.002h393v117.62c-49.613-10.32-112.271-27.672-187.005-52.677z"
        fill="#ff58ff"
      />
    </Svg>
  );
}

export default SvgComponent;
