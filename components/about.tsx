"use client"

import {MotionValue} from "motion";

export default function About({ scrollY, containerHeight }: { scrollY: MotionValue<number>; containerHeight: number }) {
  return (
    <div className="flex flex-col h-full">
      <h3 className="sticky top-14 sm:top-10 md:top-12 lg:top-20 ml-auto w-fit text-right font-sans text-xl">About Me</h3>
      <p className="font-sans text-2xl md:text-3xl lg:text-5xl sm:leading-8 md:leading-10 lg:leading-14 max-w-3xl text-balance mt-24 sm:mt-16 lg:mt-28">
        I&#39;m a Web Developer and Computer Engineering student at KOSEN-KMITL. I’m passionate about building functional web applications.
      </p>
    </div>
  )
}