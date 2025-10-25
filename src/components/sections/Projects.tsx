import { fetchProjects } from "@/sanity/lib/fetch";
import Section from "../layout/Section";
import ProjectContent from "../ProjectContent";
import ProjectTools from "../ProjectTools";
import Slider from "../Slider";
import ProjectLinks from "../ProjectLinks";

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
              <ProjectTools tools={tools ?? []} />
              <ProjectContent content={projectContent?.content ?? []} />
              <ProjectLinks links={links ?? []} />
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
