"use client";

import {
  motion, useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState, type RefObject } from "react";

export default function Title({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll({ container: containerRef });
  const [containerHeight, setContainerHeight] = useState(320);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateHeight = () => setContainerHeight(Math.max(element.clientHeight, 1));

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, [containerRef]);

  const progress = useTransform(scrollY, [0, containerHeight - 300], [0, 1], { clamp: true });

  const yRaw = useTransform(progress, [0, 1], [0, -containerHeight + 150]);
  const scaleRaw = useTransform(progress, [0, 1], [1, 0.38]);

  const y = useSpring(yRaw, { stiffness: 1000, damping: 100, mass: 1 });
  const scale = useSpring(scaleRaw, { stiffness: 1000, damping: 100, mass: 1 });

  return (
    <div className="w-full h-full flex items-end justify-end sticky top-0">
      <motion.h1
        className="font-sreda text-9xl leading-none text-end mb-0"
        style={
          shouldReduceMotion ? undefined : {
            y,
            scale,
            transformOrigin: "top right",
            willChange: "transform",
          }
        }
      >
        AungS8430
      </motion.h1>
    </div>
  )
}