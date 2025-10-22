import { PortableText, PortableTextReactComponents } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { INTRO_QUERY } from "@/sanity/lib/queries";
import Section from "@/components/layout/Section";
import { type BlockContent } from "@/sanity/types/sanity.types";

const introComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => <h1 className="font-bold text-3xl sm:text-5xl lg:text-7xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-2 font-bold text-3xl sm:text-5xl lg:text-7xl">{children}</h2>,
    normal: ({ children }) => <p className="mb-2 text-xl text-pretty">{children}</p>
  }
};

export default async function Intro() {
  const intro = await client.fetch<BlockContent>(INTRO_QUERY);

  if (!intro?.content) return null;

  return (
    <Section>
      <div className="grow flex flex-col justify-center">
        <PortableText value={intro?.content} components={introComponents} />
      </div>
    </Section>
  );
}
