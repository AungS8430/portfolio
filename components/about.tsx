"use client"

import {MotionValue} from "motion";

export default function About({ scrollY, containerHeight }: { scrollY: MotionValue<number>; containerHeight: number }) {
  return (
    <div className="flex flex-col h-full">
      <h3 className="sticky top-16 ml-auto w-fit text-right font-sans text-xl">About Me</h3>
      <p className="font-sans text-5xl leading-14 max-w-3xl text-balance mt-8">
        I&#39;m a Web Developer and Computer Engineering student at KOSEN-KMITL. I’m passionate about building functional web applications.
      </p>
    </div>
  )
}