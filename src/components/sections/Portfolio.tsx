import Section from "../layout/Section";
import PortfolioItem from "../portfolio/PortfolioItem";

export default function Portfolio() {
  return (
    <Section>
      <div className="flex flex-col gap-24">
        <PortfolioItem
          title="For Good &amp; Company Website"
          description="This project was the latest iteration of the For Good &amp; Company website that I worked on. It was built to feature the agency's work and give potential clients a sense of the company's values and approach. I worked closely with the creative team to develop the look and feel for the site as well as developed a CMS for managing the content and to allow for anyone to add a case study to the site."
          images={[
            {
              src: "/path-to-your-image.jpg", // Replace with actual image path
              alt: "Project screenshot 1",
              width: 1920,
              height: 1080
            },
            {
              src: "/path-to-your-image-2.jpg", // Replace with actual image path
              alt: "Project screenshot 2",
              width: 1920,
              height: 1080
            }
          ]}
          technologies={["React", "NextJS", "Sanit.io", "JSX", "CSS"]}
          link="https://forgoodandco.com"
        />

        {/* Add more PortfolioItem components as needed */}
      </div>
    </Section>
  );
}
