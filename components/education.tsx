import {MotionValue} from "motion";
import EducationData from "@/education.json";

export default function Education({ scrollY, containerHeight }: { scrollY: MotionValue<number>; containerHeight: number }) {
  return (
    <div className="flex flex-col h-full pb-40 justify-center items-start my-auto gap-1">
      <h3 className="font-sans text-xl">Education</h3>
      <div className="flex flex-col gap-8 overflow-hidden border-l pl-4 border-foreground/50">
        {EducationData.education.map((education, index) => (
          <div key={index} className="font-sans">
            <h5 className="text-lg font-semibold">{education.degree}</h5>
            <h4 className="text-2xl">{education.institution}</h4>
            <h5 className="text-base">{education.department}</h5>
            <p className="text-foreground/80">{education.start} - {education.end}</p>

          </div>
        ))}
      </div>
    </div>
  )
}