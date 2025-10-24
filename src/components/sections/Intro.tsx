import { PortableText, PortableTextReactComponents } from "next-sanity";
import Section from "@/components/layout/Section";
import { fetchIntro } from "@/sanity/lib/fetch";

const introComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => <h1 className="font-bold text-5xl md:text-7xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 font-bold text-5xl md:text-7xl">{children}</h2>,
    normal: ({ children }) => <p className="mb-4 text-lg md:text-xl text-pretty leading-normal">{children}</p>
  }
};

export default async function Intro() {
  const intro = await fetchIntro();

  return (
    <Section>
      <div className="grow flex flex-col justify-center">
        {intro?.content && <PortableText value={intro.content} components={introComponents} />}
      </div>
    </Section>
  );
}
