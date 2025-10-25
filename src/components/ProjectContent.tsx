import { PortableText, PortableTextReactComponents } from "next-sanity";
import { BlockContent } from "@/sanity/types/sanity.types";

interface ProjectContentProps {
  content: BlockContent["content"];
}

const contentComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => <h1 className="font-bold text-pretty text-2xl sm:text-3xl">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-pretty text-xl sm:text-2xl">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold text-pretty text-lg sm:text-xl">{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold text-pretty text-base sm:text-lg">{children}</h4>,
    normal: ({ children }) => <p className="text-pretty text-base sm:text-lg">{children}</p>
  }
};

export default function ProjectContent({ content }: ProjectContentProps) {
  if (!content) return null;

  return (
    <div className="space-y-3.5">
      <PortableText value={content} components={contentComponents} />
    </div>
  );
}
