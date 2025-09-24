import Link from "next/link";
import Image from "next/image";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

import Section from "@/components/layout/Section";
import Intro from "@/components/sections/Intro";
import Project from "@/components/Project";

import fgcoScreenshot from "@/assets/fgco-screenshot.png";

export default function Home() {
  return (
    <main>
      <Intro />
      <Section>
        <Project>
          <Project.Image>
            <Image src={fgcoScreenshot} alt="Screenshot from forgoodandco.com" />
          </Project.Image>
          <Project.Content>
            <Project.Title>For Good &amp; Company - Website</Project.Title>
            <Project.Description>
              This is an agency site to showcase their work and services. I worked closely with the creative team to on
              the design and development of the site. Creative handed off Figma designs for the look and feel and
              components for the site. I chose to use Next.js
            </Project.Description>
            <Project.Tools list={["NextJS", "React", "Sanity.io", "JSX", "CSS"]} />
            <Project.Links>
              <Link
                href="https://forgoodandco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row flex-nowrap gap-2 items-center px-4 py-2 rounded-full border-2 border-blue-400 font-bold text-blue-400 hover:bg-blue-400 hover:text-background"
              >
                View Site <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </Link>
            </Project.Links>
          </Project.Content>
        </Project>
      </Section>
    </main>
  );
}
