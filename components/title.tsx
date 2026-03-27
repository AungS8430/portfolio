"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type RefObject } from "react";

export default function Title({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll({ container: containerRef });
  const [containerHeight, setContainerHeight] = useState(320);
  const [titleHeight, setTitleHeight] = useState(50);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateHeight = () => setContainerHeight(Math.max(element.clientHeight, 1));

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, [containerRef]);

  useEffect(() => {
    const element = titleRef.current;
    if (!element) return;

    const updateTitleHeight = () => setTitleHeight(Math.max(element.clientHeight, 1));

    updateTitleHeight();

    const observer = new ResizeObserver(updateTitleHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const progress = useTransform(scrollY, [0, containerHeight - 300], [0, 1], { clamp: true });

  const yRaw = useTransform(progress, [0, 1], [0, -containerHeight + titleHeight]);
  const scaleRaw = useTransform(progress, [0, 1], [1, 0.5]);
  const opacityRaw = useTransform(progress, [0.7, 0.8], [1, 0]);

  const y = useSpring(yRaw, { stiffness: 1000, damping: 100, mass: 1 });
  const scale = useSpring(scaleRaw, { stiffness: 1000, damping: 100, mass: 1 });
  const opacity = useSpring(opacityRaw, { stiffness: 1000, damping: 100, mass: 1 });

  return (
    <div className="w-full h-full flex flex-col sticky top-0 justify-end">
      <motion.p
        className="font-sans text-md md:text-xl lg:text-3xl text-end absolute top-0 right-0 text-foreground/90 text-balance"
        style={
          shouldReduceMotion ? undefined : {
            opacity: opacity,
            transformOrigin: "top right",
            willChange: "transform"
          }
        }
      >
        A computer engineering student at KOSEN-KMITL<br />Finding source of the light, with the lines of logic
      </motion.p>
      <motion.h1
        ref={titleRef}
        className="font-sreda text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-none text-end mb-0 self-end"
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