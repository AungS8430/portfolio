import Link from "next/link";
import ScrollPane from "@/components/scrollpane";
export default function Home() {
  return (
    <div className="w-dvw h-dvh p-4 sm:p-8 flex flex-row gap-4">
      <div className="hidden sm:flex flex-col gap-2 nav">
        <Link href={"#home"}>Home</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#education"}>Education</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
      <ScrollPane />
    </div>
  );
}
