import Intro from "@/components/sections/Intro";
import Project from "@/components/Project";

import projects from "@/projects.json";

export default function Home() {
  return (
    <main className="border-4">
      <Intro />
      {projects.map(project => (
        <Project key={project.title} {...project} />
      ))}
    </main>
  );
}
