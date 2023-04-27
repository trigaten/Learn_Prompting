import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ScrollingText({ children, baseVelocity = 1, values = [] }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax text-5xl md:text-9xl ">
      <motion.div className="scroller" style={{ x }}>
        {values.map((value, i) => (
          <div key={i}>
            <a
              target="_blank"
              href={value.url}
              rel="noreferrer"
              className="hover:underline cursor-pointer"
            >
              {value.name}
            </a>{" "}
            ·
          </div>
        ))}
        {values.map((value, i) => (
          <div key={i}>
            <a
              target="_blank"
              href={value.url}
              rel="noreferrer"
              className=" hover:underline cursor-pointer"
            >
              {value.name}
            </a>{" "}
            ·
          </div>
        ))}
        {values.map((value, i) => (
          <div key={i}>
            <a
              target="_blank"
              href={value.url}
              rel="noreferrer"
              className="hover:underline cursor-pointer"
            >
              {value.name}
            </a>{" "}
            ·
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ScrollingText;
