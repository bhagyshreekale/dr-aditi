"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMG_PADDING = 12;

export default function TextParallaxSection({
  imgUrl,
  subheading,
  heading,
}) {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative" style={{ height: "150vh" }}>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
    </div>
  );
}

function StickyImage({ imgUrl }) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
 <motion.div
  ref={targetRef}
  style={{
    backgroundColor: "rgba(242, 139, 139, 0.55)",
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: `calc(100vh - ${IMG_PADDING * 2}px)`,
    top: IMG_PADDING,
    scale,
    position: "sticky",
  }}
  className="rounded-4 overflow-hidden"
>
  <motion.div
  className="absolute inset-0"
  style={{
    backgroundColor: "rgba(0,0,0,0.55)",
    opacity,
  }}
/>
    </motion.div>
  );
}

function OverlayCopy({ subheading, heading }) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
const opacity = useTransform(
  scrollYProgress,
  [0.15, 0.4, 0.85],
  [0, 1, 0]
);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center"
    >
      <p className="fs-4 mb-2">{subheading}</p>
      <h2 className="display-4 fw-bold">{heading}</h2>
    </motion.div>
  );
}