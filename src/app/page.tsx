import Link from "next/link";
import Image from "next/image";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

import Section from "@/components/layout/Section";
import Intro from "@/components/sections/Intro";

import fgcoScreenshot from "@/assets/fgco-screenshot.png";

const Tools = ({ list }: { list: string[] }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {list.map(item => (
        <span key={item} className="px-3 py-1 text-sm font-bold border border-slate-400 text-slate-400 rounded-full">
          {item}
        </span>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <Intro />
      <Section>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-2 self-start rounded-lg border-2 border-slate-400 overflow-hidden">
            <Image src={fgcoScreenshot} alt="Screenshot from forgoodandco.com" />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-pretty">For Good &amp; Company - Website</h1>
            <p className="text-balance">
              This is an agency site to showcase their work and services. I worked closely with the creative team to on
              the design and development of the site. Creative handed off Figma designs for the look and feel and
              components for the site. I chose to use Next.js
            </p>
            <Tools list={["NextJS", "React", "Sanity.io", "JSX", "CSS"]} />
            <div className="flex flex-row flex-wrap gap-2">
              <Link
                href="https://forgoodandco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row flex-nowrap gap-2 items-center px-4 py-2 rounded-full border-2 border-blue-400 font-bold text-blue-400 hover:bg-blue-400 hover:text-background"
              >
                View Site <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
