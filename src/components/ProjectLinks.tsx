import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { Projects } from "@/sanity/types/sanity.types";

interface ProjectLinksProps {
  links: Projects["links"];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links) return null;

  return (
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
  );
}
