"use client";

import { useRef } from "react";
import Title from "@/components/title";

export default function ScrollPane() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-full min-h-0 flex flex-col overflow-y-auto no-scrollbar">
      <section id="home" className="h-full shrink-0 sticky top-0 overflow-y-auto no-scrollbar">
        <Title containerRef={containerRef} />
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