import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Section from "./layout/Section";
import Slider from "./Slider";
import { type BlockContent } from "@/sanity/types/sanity.types";
import ProjectDetails from "./ProjectDetails";
import { type SanityImageProps } from "./SanityImage";
import { type SanityVideoProps } from "./SanityVideo";

export interface ProjectProps {
  _id: string;
  title?: string;
  projectContent?: BlockContent;
  assets?: (SanityImageProps | SanityVideoProps)[];
  tools?: string[];
  links?: Array<{
    _key: string;
    name: string;
    url: string;
  }>;
}

export default function Project(props: ProjectProps) {
  const { assets, title, projectContent, tools, links } = props;
  return (
    <Section>
      <div className="grow flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-pretty">{title}</h1>
        <div className="rounded-lg border-4 border-dark dark:border-light overflow-hidden">
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
          {projectContent && <ProjectDetails {...projectContent} />}

          {links && (
            <div className="flex flex-row flex-wrap gap-2">
              {links.map(link => (
                <Link
                  key={link.name}
                  href={link.url || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row flex-nowrap gap-2 items-center px-4 py-2 rounded-full border-2 border-blue-400 font-bold text-blue-400 hover:bg-blue-400 hover:text-light hover:dark:text-dark"
                >
                  {link.name} <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
