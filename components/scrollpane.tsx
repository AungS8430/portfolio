"use client";

import {useEffect, useRef, useState} from "react";
import {
  useScroll,
} from "motion/react";
import Title from "@/components/title";

export default function ScrollPane() {
  const [containerHeight, setContainerHeight] = useState(350);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateHeight = () => setContainerHeight(Math.max(element.clientHeight, 1));

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-0 flex flex-col overflow-y-auto no-scrollbar">
      <section id="home" className="h-full shrink-0 sticky top-0 overflow-y-auto no-scrollbar">
        <Title scrollY={scrollY} containerHeight={containerHeight} />
      </section>
      <section id="about" className="h-full shrink-0 overflow-y-auto no-scrollbar">
        <div className="h-full w-full">test</div>
      </section>
      <section id="about" className="h-full shrink-0 overflow-y-auto no-scrollbar">
        <div className="h-full w-full">test</div>
      </section>
    </div>
  )
}