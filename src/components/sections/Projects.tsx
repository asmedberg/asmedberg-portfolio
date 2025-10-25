import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { fetchProjects } from "@/sanity/lib/fetch";
import Section from "../layout/Section";
import ProjectContent from "../ProjectContent";
import Slider from "../Slider";

export default async function Projects() {
  const projects = await fetchProjects();

  if (!projects || projects.length === 0) {
    return (
      <Section>
        <p>No projects found :/</p>
      </Section>
    );
  }

  return (
    <>
      {projects.map(({ _id, assets, title, projectContent, tools, links }) => (
        <Section key={_id}>
          <div className="grow flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-pretty">{title}</h1>
            <Slider slides={assets ?? []} />
            <div className="flex flex-col gap-4">
              <div className="flex flex-row flex-wrap gap-2">
                {tools?.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm font-bold border border-(--blue) text-(--blue) dark:border-[#859ECF] dark:text-[#859ECF] rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <ProjectContent content={projectContent?.content ?? []} />
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
      ))}
    </>
  );
}
