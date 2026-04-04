"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

import ProjectData from "@/projects.json";
import Link from "next/link";

import { ExternalLink, FolderGit } from "lucide-react";

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export default function Projects({ containerRef }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      setMaxX(Math.max(track.scrollWidth - viewport.clientWidth, 0));
    };

    update();
    const ro = new ResizeObserver(update);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerRef, // IMPORTANT: your scroll is not window
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const edgeSnapThreshold = 0.08;
  const edgeSnappedProgress = useTransform(scrollYProgress, (value) => {
    const clamped = Math.min(Math.max(value, 0), 1);
    if (clamped <= edgeSnapThreshold) return 0;
    if (clamped >= 1 - edgeSnapThreshold) return 1;
    return clamped;
  });

  const smoothProgress = useSpring(edgeSnappedProgress, {
    stiffness: 220,
    damping: 30,
    mass: 0.35,
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -maxX]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${Math.max(ProjectData.projects.length, 2) * 40}vh` }}
    >
      <div ref={stickyRef} className="sticky top-0 h-dvh overflow-hidden flex items-center bg-foreground/5">
        <div className="bg-foreground h-full p-4 z-20">
          <h3 className="[writing-mode:vertical-lr] text-background font-sans text-xl">Projects</h3>
        </div>
        <div ref={viewportRef} className="flex-1 h-full overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex h-full will-change-transform transform-gpu">
            {ProjectData.projects.map((item) => (
              <div
                key={item.name}
                className="max-w-full sm:max-w-full min-w-64 sm:min-w-96 h-full border border-foreground/20 flex flex-col justify-end"
              >
                <div className="p-4">
                  <p className="font-sans">{item.description}</p>
                  <h4 className="font-sans text-2xl font-semibold">{item.name}</h4>
                </div>
                <div className="flex flex-row gap-px">
                  <Link href={item.live ?? "#"} className={`w-full inline-flex gap-2 text-background justify-center p-2 ${item.live ? "bg-foreground hover:bg-foreground/90" : "bg-foreground/60 hover:cursor-default"}`}>
                    <ExternalLink size={16} className="my-auto" /> View
                  </Link>
                  <Link href={item.repo ?? "#"} className={`w-full inline-flex gap-2 text-background justify-center p-2 ${item.repo ? "bg-foreground hover:bg-foreground/90" : "bg-foreground/60 hover:cursor-default"}`}>
                    <FolderGit size={16} className="my-auto" /> Repo
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
