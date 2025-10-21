import Intro from "@/components/sections/Intro";
import Project from "@/components/Project";
import { ProjectProps } from "@/components/Project";

import projects from "@/projects.json";

export default async function Home() {
  return (
    <main>
      <Intro />
      {(projects as ProjectProps[]).map(project => (
        <Project key={project.title} {...project} />
      ))}
    </main>
  );
}
