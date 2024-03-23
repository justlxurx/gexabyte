import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ value }: { value: Number }) => {
  const { ref, inView } = useInView();

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? value : 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.span ref={ref}>
      {number.interpolate((x) => Math.floor(x))}
    </animated.span>
  );
};

export default AnimatedNumber;
