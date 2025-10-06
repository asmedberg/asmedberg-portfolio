import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Section from "./layout/Section";

interface ProjectProps {
  image?: {
    source: string;
    alt: string;
    width: number;
    height: number;
  };
  video?: {
    source: string;
    title: string;
  };
  title: string;
  description: string[];
  tools?: string[];
  links?: {
    project?: string;
    code?: string;
  };
}

export default function Project(props: ProjectProps) {
  const { image, title, description, tools, links } = props;
  return (
    <Section>
      <div className="grow flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-2 rounded-lg border-2 border-slate-400 overflow-hidden">
          {image && <Image src={image.source} alt={image.alt} width={image.width} height={image.height} />}
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-pretty">{title}</h1>
          <div className="space-y-2">
            {description.map((desc, i) => (
              <p key={i} className="text-balance">
                {desc}
              </p>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            {tools?.map(item => (
              <span
                key={item}
                className="px-3 py-1 text-sm font-bold border border-slate-400 text-slate-400 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          {(links?.project || links?.code) && (
            <div className="flex flex-row flex-wrap gap-2">
              {links.project && (
                <Link
                  href={links.project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row flex-nowrap gap-2 items-center px-4 py-2 rounded-full border-2 border-blue-400 font-bold text-blue-400 hover:bg-blue-400 hover:text-background"
                >
                  View Site <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              )}
              {links.code && (
                <Link
                  href={links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row flex-nowrap gap-2 items-center px-4 py-2 rounded-full border-2 border-blue-400 font-bold text-blue-400 hover:bg-blue-400 hover:text-background"
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
