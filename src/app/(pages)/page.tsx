import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Projects, PROJECTS_QUERYResult } from "@/sanity/types/sanity.types";
import Intro from "@/components/sections/Intro";
import Project from "@/components/Project";

const getProjects = async () => {
  try {
    const projects = await client.fetch<PROJECTS_QUERYResult>(PROJECTS_QUERY);
    if (!projects) {
      return { error: "No projects returned." };
    }
    return projects;
  } catch (error) {
    return { error: `Something went wrong: ${error}` };
  }
};

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <Intro />
      {(projects as Projects[]).map(project => (
        <Project key={project._id} {...project} />
      ))}
    </main>
  );
}
