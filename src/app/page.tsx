import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Section>
        <div className="grow flex flex-col justify-center">
          <h1 className="font-bold text-3xl">Hi, I&rsquo;m Adam</h1>
          <p className="mt-2 text-pretty">
            I&rsquo;m a web developer specializing in building modern web applications.
          </p>
          <p className="mt-2">Here is some of my work:</p>
        </div>
      </Section>
    </main>
  );
}
