import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Section from "./layout/Section";
import Slider from "./Slider";
import { Slide } from "./Slider";

export interface ProjectProps {
  assets?: Slide[];
  title: string;
  description: string[];
  tools?: string[];
  links?: {
    project?: string;
    code?: string;
  };
}

export default function Project({ assets, title, description, tools, links }: ProjectProps) {
  return (
    <Section>
      <div className="grow flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-pretty">{title}</h1>
        <div className="rounded-lg border-2 border-slate-400 overflow-hidden">
          {assets && <Slider slides={assets} />}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap gap-2">
            {tools?.map(item => (
              <span
                key={item}
                className="px-3 py-1 text-sm font-bold border border-[var(--blue)] text-[var(--blue)] dark:border-[#859ECF] dark:text-[#859ECF] rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="space-y-7 md:columns-2 md:gap-x-8">
            {description.map((desc, i) => (
              <p key={i} className="text-pretty">
                {desc}
              </p>
            ))}
          </div>

          {(links?.project || links?.code) && (
            <div className="flex flex-row flex-wrap gap-2">
              {links.project && (
                <Link
                  href={links.project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row flex-nowrap gap-2 items-center px-4 py-2 rounded-full border-2 border-blue-400 font-bold text-blue-400 hover:bg-blue-400 hover:text-light hover:dark:text-dark"
                >
                  View Site <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              )}
              {links.code && (
                <Link
                  href={links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row flex-nowrap gap-2 items-center px-4 py-2 rounded-full border-2 border-blue-400 font-bold text-blue-400 hover:bg-blue-400 hover:text-light hover:dark:text-dark"
                >
                  View Code <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
