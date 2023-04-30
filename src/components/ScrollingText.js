import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Marquee from "react-fast-marquee";

function ScrollingText({ values }) {
  const controls = useAnimation();
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const halfWidth = logosRef.current.clientWidth / 2;

      async function animate() {
        await controls.start({
          x: -halfWidth,
          transition: { duration: 25, repeat: Infinity },
        });
      }

      animate();
    }
  }, [controls, logosRef]);

  const renderLogos = (logos) =>
    logos.map((brand, index) => (
      <a
        key={index}
        href={brand.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mx-8"
        style={{ minWidth: "140px" }}
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-20 w-auto object-contain"
          style={brand.name === "Scale" ? { width: "140px" } : {}}
        />
      </a>
    ));

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={logosRef}
        className="flex gap-0"
        animate={controls}
        initial={{ x: "0%" }}
      >
        {renderLogos(values)}
        {renderLogos(values)}
      </motion.div>
    </div>
  );
}

export default ScrollingText;
