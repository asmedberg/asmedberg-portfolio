import { fetchProjects } from "@/sanity/lib/fetch";
import Intro from "@/components/sections/Intro";
import Project, { type ProjectProps } from "@/components/Project";

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <main>
      <Intro />
      {projects && (projects as ProjectProps[])?.map(project => <Project key={project._id} {...project} />)}
    </main>
  );
}
