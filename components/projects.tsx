"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

import ProjectData from "@/projects.json";

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export default function Projects({ containerRef }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      const sticky = stickyRef.current;
      const track = trackRef.current;
      if (!sticky || !track) return;
      setMaxX(Math.max(track.scrollWidth - sticky.clientWidth, 0));
    };

    update();
    const ro = new ResizeObserver(update);
    if (stickyRef.current) ro.observe(stickyRef.current);
    if (trackRef.current) ro.observe(trackRef.current);

    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerRef, // IMPORTANT: your scroll is not window
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div ref={stickyRef} className="sticky top-0 h-dvh overflow-hidden flex items-center bg-foreground/5">
        <div className="bg-foreground h-full p-4 z-20">
          <h3 className="[writing-mode:vertical-lr] text-background font-sans text-xl">Projects</h3>
        </div>
        <motion.div ref={trackRef} style={{ x }} className="flex h-full will-change-transform">
          {ProjectData.projects.map((item) => (
            <div
              key={item.name}
              className="min-w-96 w-[20%] h-full shrink-0 border border-foreground/20 flex flex-col justify-end"
            >
              <div className="p-4">
                <p className="font-sans">{item.description}</p>
                <h4 className="font-sans text-2xl font-semibold">{item.name}</h4>
              </div>
              <div className="flex flex-row">
                <button className="w-full bg-foreground text-background p-2">
                  View
                </button>
                <button className="w-full bg-foreground text-background">
                  Repo
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
