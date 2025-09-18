import Section from "@/components/layout/Section";
import Intro from "@/components/sections/Intro";
import P5Canvas from "@/components/P5Canvas";

export default function Home() {
  return (
    <>
      <main>
        <Section>
          <Intro />
        </Section>
        <Section>stuff here</Section>
      </main>
      <P5Canvas />
    </>
  );
}
