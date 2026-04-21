"use client"

import {MotionValue} from "motion";

export default function About({ scrollY, containerHeight }: { scrollY: MotionValue<number>; containerHeight: number }) {
  return (
    <div className="flex flex-col h-full pb-24">
      <h3 className="sticky top-14 sm:top-10 md:top-12 lg:top-20 ml-auto w-fit text-right font-sans text-xl">About Me</h3>
      <p className="sticky top-44 sm:top-36 lg:top-48 font-sans text-2xl md:text-3xl lg:text-5xl sm:leading-8 md:leading-10 lg:leading-14 max-w-3xl text-balance">
        I&#39;m a Web Developer and a student at KOSEN-KMITL. I’m passionate about building web applications and other tools.
      </p>
    </div>
  )
}