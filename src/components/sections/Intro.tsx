import { PortableText, PortableTextReactComponents } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { INTRO_QUERY } from "@/sanity/lib/queries";
import Section from "@/components/layout/Section";
import { type INTRO_QUERYResult } from "@/sanity/types/sanity.types";

const introComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => <h1 className="font-bold text-5xl md:text-7xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 font-bold text-5xl md:text-7xl">{children}</h2>,
    normal: ({ children }) => <p className="mb-4 text-lg md:text-xl text-pretty">{children}</p>
  }
};

const getIntro = async () => {
  try {
    const intro = await client.fetch<INTRO_QUERYResult>(INTRO_QUERY);
    if (!intro?.content) {
      throw new Error("Content not returned");
    }
    return intro?.content;
  } catch (error) {
    console.error(`Something went wrong; ${error}`);
  }
};

export default async function Intro() {
  const content = await getIntro();

  if (!content) return null;

  return (
    <Section>
      <div className="grow flex flex-col justify-center max-w-prose mx-auto">
        <PortableText value={content} components={introComponents} />
      </div>
    </Section>
  );
}
